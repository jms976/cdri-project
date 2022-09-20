import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-weight: bold;
  }
`;

export const ResultLike = styled.div`
  display: flex;
  .label {
    margin-right: 10px;
  }
  .count {
    span {
      color: #4880ee;
      margin-left: 5px;
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-top: 30px;
`;

export const EmptyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  img {
    width: 80px;
    margin-bottom: 10px;
  }
`;

export const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .pagination {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 25px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 12px;
  }

  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #4880ee;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #4880ee;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
