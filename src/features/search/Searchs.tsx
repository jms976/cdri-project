import React, { useEffect, useState, useCallback } from "react";
import Pagination from "react-js-pagination";
import { useQuery, useQueryClient } from "react-query";
import classNames from "classnames";

import { getSearchBooks } from "./searchAPI";

import { Input, Button } from "@/modules/Styled";
import Portals from "@/hooks/usePortals";

import BookList from "@/features/bookList/BookList";

import { SearchBookDataTypes } from "@/constants/Types";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import emptyImg from '@/assets/icon_book.png';
import * as S from "./styles";

const Search: React.FC = () => {
  const [page, setPage] = useState(1);
  const queryOptions =  {
    staleTime: 60000,
    chcheTime: Infinity,
    keepPreviousData: false,
  };

  const [searchValue, setSearchValue] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [openTargetList, setOpenTargetList] = useState(false);

  const targetList = [
    {label: '제목', value: 'title'},
    {label: '출판사', value: 'publisher'},
    {label: '저자', value: 'person'},
  ]
  const [currentTarget, setCurrentTarget] = useState('title');
  const [searchTarget, setSearchTarget] = useState('title');

  const { data , isError, isLoading, isPreviousData } = useQuery<SearchBookDataTypes>(
    ["bookList", searchTarget, searchValue, page],
    () => getSearchBooks({target: searchTarget, page, value: searchValue}),
    { ...queryOptions, enabled: searchValue ? true: false }
  );

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, [page]);

  /** 쿼리상태 */
  const [status, setStatus] = useState('empty');

  /** 상태값 변경 */
  useEffect(() => {
    if (isError) {
      setStatus('error');
    };
    if (isLoading) {
      setStatus('loading');
    }
    if (data) {
      if (data.documents.length === 0) {
        setStatus('empty');
        return;
      }
      setStatus('data');
      return;
    }
  }, [data, isError, isLoading]);

  const handleOnKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    setPage(1);
    setSearchValue(currentText);
  };
  
  const handleTargetChange = useCallback((target: {value: string, label: string}) => {
    if (target.value === currentTarget) return;
    setCurrentTarget(target.value);
    setOpenTargetList(false);
  }, [currentTarget, openTargetList]);

  const EmptyData = () => {
    return (
      <S.EmptyPage>
        <img src={emptyImg} />
        <>검색결과가 없습니다.</>
      </S.EmptyPage>
    )
  }

  return (
    <S.Container>
      <S.SearchContainer>
        <label className="title">도서검색</label>
        <div className="inputSection">
          <S.SearchIcon>
            <BiSearch />
          </S.SearchIcon>
          <Input
            className="searchInput"
            width={"250px"}
            type="text"
            value={currentText}
            onKeyPress={handleOnKeyPress}
            onChange={(e) => {
              setCurrentText(e.target.value);
            }}
            placeholder="검색어를 입력하세요"
          />
          <div id="detailSearch">
            <Button 
              className="detailBtn" 
              onClick={() => setIsSearchPopupOpen(true)} 
            >
              상세검색
            </Button>
          </div>
          {isSearchPopupOpen && (
            <Portals target={'detailSearch'} closeState={setIsSearchPopupOpen}>
              <>
                <S.DetailSearchPopup>
                  <span className="close">
                    <AiOutlineClose onClick={() => {
                      setOpenTargetList(false);
                      setIsSearchPopupOpen(false);
                    }}/>
                  </span>
                  <div className="searchWrapper" id="target" >
                    <div className="targetSelect" onClick={() => {
                      setOpenTargetList(p => !p);
                    }}>
                      {targetList.find((target) => target.value === currentTarget)?.label}
                      <AiOutlineDown />
                    </div>
                    <Input width={'100%'} value={currentText} onChange={(e) => {
                      setCurrentText(e.target.value);
                    }}/>
                    {openTargetList && (
                      <S.SearchTargetList>
                        {targetList.map((target, index) => 
                          <div
                            key={index} 
                            className={classNames({
                              list: true,
                              current: target.value === currentTarget,
                            })} 
                            onClick={() => {
                              handleTargetChange(target);
                            }}
                          >
                            {target.label}
                          </div>
                        )}
                      </S.SearchTargetList>
                    )}
                  </div>
                  <Button onClick={() => {
                    setSearchValue(currentText);
                    setSearchTarget(currentTarget);
                    setPage(1);
                    setIsSearchPopupOpen(false);
                  }}>
                    검색하기
                  </Button>
                </S.DetailSearchPopup>
              </>
            </Portals>
          )}
        </div>
      </S.SearchContainer>
      
      <S.ResultSearch>
        <span className="label">{searchValue && `"${searchValue}" `}검색결과({targetList.find((target) => target.value === searchTarget)?.label})</span>
        <span className="count">
          총 <span>{data?.meta.pageable_count || 0}</span>건</span>
      </S.ResultSearch>
      
      <S.ListWrapper>
        {
          {
            loading: <>로딩</>,
            error: <>에러</>,
            empty: <EmptyData />,
            data: <BookList data={data?.documents || []}/>,
          }[status]
        }
      </S.ListWrapper>

      <S.PagenationWrapper>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={data?.meta.pageable_count || 10}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </S.PagenationWrapper>
    </S.Container>
  );
};

export default Search;
