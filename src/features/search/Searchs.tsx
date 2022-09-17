import React, { useEffect, useState, useCallback } from "react";
import Pagination from "react-js-pagination";
import { useQuery, useQueryClient } from "react-query";

import { getSearchBooks } from "./searchAPI";

import { Input, Button } from "@/modules/Styled"

import { SearchBookDataTypes } from "@/constants/Types";
import { AiOutlineClose } from "react-icons/ai"
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

  const { data , isError, isLoading, isPreviousData } = useQuery<SearchBookDataTypes>(
    ["bookList", searchValue, page],
    () => getSearchBooks({page, value: searchValue}),
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
  
  return (
    <S.Container>
      <S.SearchContainer>
        <label>도서검색</label>
        <div className="inputSection">
          <Input
            className="searchInput"
            width={"200px"}
            type="text"
            value={currentText}
            onKeyPress={handleOnKeyPress}
            onChange={(e) => {
              setCurrentText(e.target.value);
            }}
            placeholder="검색어를 입력하세요"
          />
          <Button className="detailBtn" onClick={() => setIsSearchPopupOpen(true)}>
            상세검색
          </Button>
          {isSearchPopupOpen && (
            <S.DetailSearchPopup>
              <AiOutlineClose onClick={() => setIsSearchPopupOpen(false)}/>
              <Input onChange={(e) => {
                setCurrentText(e.target.value);
              }}/>
              <Button onClick={() => {
                setSearchValue(currentText);
                setIsSearchPopupOpen(false);
              }}>검색하기</Button>
            </S.DetailSearchPopup>
          )}
        </div>
      </S.SearchContainer>
      
      <div>검색결과: 총 {data?.meta.pageable_count || 0} 건</div>
      
      <S.ListWrapper>
        {
          {
            loading: <>로딩</>,
            error: <>에러</>,
            empty: <>비어있음</>,
            data: (
              data?.documents.map((bookList, index: number) => 
                <span key={index}>{bookList.title}</span>
              )
            )
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
