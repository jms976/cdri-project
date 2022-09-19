import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    .inputSection {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px 0;
        .searchInput {
            background: #e2e2e2;
            border: none;
            border-radius: 1em;
            padding-left: 40px
        }
        .detailBtn {
            position:relative;
            margin-left: 10px;
        }
    }
    .title {
        font-weight: bold;
    }
    #detailSearch {
        position: relative;
    }
`;

export const SearchIcon = styled.div`
    position: absolute;
    z-index: 1;
    font-size: 20px;
    top: 17px;
    left: 12px;
`;
export const ResultSearch = styled.div`
    display: flex;
    .label {
        margin-right: 20px;
    }
    .count {
        span {
            color: #4880EE;
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

export const DetailSearchPopup = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #fff;
    left: calc(-50% - 52px);
    margin-top: 5px;
    padding: 10px;
    .close {
        display: flex;
        margin: 0 0 0 auto;
        cursor: pointer;
    }
    .searchWrapper {
        display: flex;
        margin-bottom: 10px;
        input {
            border: none;
            border-bottom: 1px solid #ddd;
            border-radius: 0;
            :focus {
                border-color: #4880EE;
            }
        }
        .targetSelect {
            cursor: pointer;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            width: 90px;
            flex-shrink: 0;
            justify-content: space-evenly;
            margin-right: 10px;
            :hover {
                border-color: #4880EE;
            }
        }
    }
`;

export const SearchTargetList = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 78px;
    max-height: 150px;
    background: #fff;
    top: 60px;
    background: #fff;
    z-index: 9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    .list {
        :hover {
            color: #4880EE;
        }
    }
    .current {
        cursor: default;
        color: #bbb !important;
    }
`;

export const EmptyPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    img {
        width: 80px;
        argin-bottom: 10px;
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
        color: #4880EE;
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

