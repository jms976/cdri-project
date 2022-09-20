import React, { useEffect, useState, useCallback } from "react";
import Pagination from "react-js-pagination";
import { useQuery } from "react-query";

import BookList from "@/features/bookList/BookList";

import { BookInfoTypes } from "@/constants/Types";
import emptyImg from "@/assets/icon_book.png";

import * as S from "./styles";

const Likes: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allCount, setAllCount] = useState(0);

  const queryOptions = {
    staleTime: 60000,
    chcheTime: Infinity,
    keepPreviousData: false,
  };

  const getLikeBooks = ({ page }: { page: number }) => {
    const localLikeList = localStorage.getItem("likeBookList") || "";
    const localBookArr = localLikeList ? JSON.parse(localLikeList) : [];
    setAllCount(localBookArr?.length || 0);
    return localBookArr.splice(page === 1 ? 0 : (page - 1) * 10, +10);
  };

  const { data, isError, isLoading } = useQuery<BookInfoTypes[]>(
    ["likeList", page],
    () => getLikeBooks({ page }),
    { ...queryOptions }
  );

  /** 쿼리상태 */
  const [status, setStatus] = useState("empty");

  /** 상태값 변경 */
  useEffect(() => {
    if (isError) {
      setStatus("error");
    }
    if (isLoading) {
      setStatus("loading");
    }
    if (data) {
      if (data.length === 0) {
        setStatus("empty");
        return;
      }
      setStatus("data");
      return;
    }
  }, [data, isError, isLoading]);

  const EmptyData = () => {
    return (
      <S.EmptyPage>
        <img src={emptyImg} />
        <>찜한 책이 없습니다.</>
      </S.EmptyPage>
    );
  };

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
    },
    [page]
  );

  return (
    <S.Container>
      <S.LikeContainer>
        <label className="title">내가 찜한 책</label>
      </S.LikeContainer>
      <S.ResultLike>
        <span className="label">찜한 책</span>
        <span className="count">
          총 <span>{allCount || 0}</span>건
        </span>
      </S.ResultLike>

      <S.ListWrapper>
        {
          {
            loading: <>로딩</>,
            error: <>에러</>,
            empty: <EmptyData />,
            data: <BookList data={data || []} />,
          }[status]
        }
      </S.ListWrapper>

      <S.PagenationWrapper>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={allCount || 10}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </S.PagenationWrapper>
    </S.Container>
  );
};

export default Likes;
