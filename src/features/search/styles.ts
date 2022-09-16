import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PagenationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 10px;
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
        width: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        font-size: 25px;
    }

    ul.pagination li a {
        text-decoration: none;
        color: #337ab7;
        font-size: 20px;
    }

    ul.pagination li.active a {
        color: white;
    }
    ul.pagination li.active {
        background-color: #337ab7;
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
        color: blue;
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
