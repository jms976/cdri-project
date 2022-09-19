import styled from "styled-components";

export const BooKListContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

export const BookInfo = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 100px;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0 10px;
    .leftInfo {
        display: flex;
        align-items: center;
        width: calc(100% - 150px);
        .img {
            display: flex;
            height: 80px;
            padding: 0 30px 0 20px;
            cursor: pointer;
        }
        .likeIcon {
            position: absolute;
            top: 13px;
            left: 63px;
            cursor: pointer;
            img {
                width: 18px;
            }
        }
        .title {
            display: flex;
            margin-right: 10px;
            font-weight: bold;
        }
        .authors {
            display: flex;
            font-size: 12px;
            color: #aaa;
        }
    }
    .rightInfo {
        display: flex;
        align-items: center;
        .price {
            display: flex;
            width: 80px;
            justify-content: flex-end;
            margin: 0 20px 0 0;
            font-weight: bold;
        }
        .buyBtn {
            display: flex;
            width: 100px;
            padding: 10px;
            margin-right: 10px;
            justify-content: center;
            align-items: center;
        }
        .detailBtn {
            display: flex;
            width: 100px;
            padding: 10px;
            margin-right: 10px;
            justify-content: center;
            align-items: center;
            background: #F2F4F6;
            color: #6D7582;
            .icon {
                margin-left: 5px;
            }
        }
    }
`;

export const BookDetailInfo = styled.div`
    display: flex;
    position: relative;
    height: 300px;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .img {
        display: flex;
        height: 250px;
        padding: 0 30px 0 20px;
        flex-shrink: 0;
        cursor: pointer;
    }
    .likeIcon {
        position: absolute;
        top: 32px;
        left: 160px;
        cursor: pointer;
        img {
            width: 25px;
        }
    }
    .bookContents {
        display: flex;
        flex-direction: column;
        height: calc(100% - 40px);
        padding: 30px 0px 10;
        width: 500px;
        overflow-y: auto;
        flex-shrink: 0;
        .subject {
            display: flex;
            .title {
                margin-right: 10px;
                font-weight: bold;
            }
            .authors {
                font-size: 12px;
                color: #aaa;
            }
        }
        .label {
            display: flex;
            margin: 20px 0 10px;
            font-weight: bold;
        }
        .desc {
            display: flex;
            font-size: 13px;
        }
    }
    .bookPrice {
        display: flex;
        flex-direction: column;
        width: calc(100% - 700px);
        height: calc(100% - 20px);
        padding: 20px 10px;
        justify-content: space-between;
        .detailBtn {
            display: flex;
            width: 100px;
            padding: 10px;
            justify-content: center;
            align-items: center;
            background: #F2F4F6;
            color: #6D7582;
            justify-content: flex-end;
            width: 100%;
            .icon {
                margin-left: 5px;
            }
        }
        .bottomItem {
            display: flex;
            flex-direction: column;
            .price {
                display: flex;
                justify-content: flex-end;
                padding: 0 10px;
                .isDC {
                    text-decoration: line-through;
                }
                &.originPrice {
                    font-size: 16px;
                    font-weight: bold;
                }
                &.dcPrice {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .buyBtn {
                display: flex;
                padding: 10px;
                margin-right: 10px;
                margin-top: 15px;
                justify-content: center;
                align-items: center;
            }
           
        }
    }
`;