import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { MutationFilters } from "react-query/types/core/utils";

import { getSearchBooks } from "./searchAPI";

const Search: React.FC = () => {
  const queryOptions = (): Record<string, any> => {
    return {
      staleTime: 60000,
      chcheTime: Infinity,
    };
  };

  const { data, isError, isLoading } = useQuery(
    ["bookList", "검색단어"],
    () => getSearchBooks(),
    { ...queryOptions }
  );

  useEffect(() => {
    console.log(data, isError);
    if (!data) return;
  }, [data]);

  return (
    // <div>
    //   {data.documents.map((bookList: any, index: number) => {
    //     <span key={index}>{bookList.title}</span>;
    //   })}
    // </div>
    <>ddd</>
  );
};

export default Search;
