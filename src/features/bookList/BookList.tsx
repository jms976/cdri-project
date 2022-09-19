import React, { useEffect, useState, useCallback } from "react";
import classNames from "classnames";
import { useMutation } from "react-query";

import { Button } from "@/modules/Styled";

import { BookInfoTypes } from "@/constants/Types";
import * as S from "./styles";
import LikeIcon from '@/assets/like_icon.png';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface BookListProps {
    data: BookInfoTypes[],
}
const BookList: React.FC<BookListProps> = ({data}) => {
    const [detailView, setDetailView] = useState(-1);
    const [likeList, setLikeList] = useState<string[]>([]);

    useEffect(() => {
        const localLikeList = localStorage.getItem("likeBookList") || '';		
        const localBookArr = localLikeList ? JSON.parse(localLikeList): [];
        const isbnList = localBookArr.map((book: any) => book.isbn);
        setLikeList([...isbnList]);
    }, [])

    const updateLike = async (likeBook: any) => {
        const localLikeList = localStorage.getItem("likeBookList") || '';		
        const localBookArr = localLikeList ? JSON.parse(localLikeList): [];
        if (likeBook.isAdd) {
            localBookArr.push(likeBook);
            localStorage.setItem("likeBookList", JSON.stringify(localBookArr));
        } else {
            const deleteList = localBookArr.filter((like:any) => like.isbn !== likeBook.isbn);
            localStorage.setItem("likeBookList", JSON.stringify(deleteList));
        }
        delete likeBook.isAdd;
        return;
    }
    const mutation = useMutation((likeBook: any) => {
        return updateLike(likeBook);
    })

    const likeToggle = ({data}: {data: BookInfoTypes}) => {
        if (likeList.includes(data.isbn)) {
            setLikeList(likeList.filter((like) => like !== data.isbn));
            mutation.mutate({...data, isAdd: false});
            return;
        }
        setLikeList((old) => [...old, data.isbn]);
        mutation.mutate({...data, isAdd: true});
    }
    const BookInfo = ({data, index}: {data: BookInfoTypes, index: number}) => {
        const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const dcPrice = data.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
            <S.BookInfo>
                <div className="leftInfo">
                    <img className="img" src={data.thumbnail} onClick={() => likeToggle({data})} />
                    {likeList.includes(data.isbn) && (
                        <div className="likeIcon" onClick={() => likeToggle({data})}>
                            <img src={LikeIcon} />
                        </div>
                    )}
                    <span className="title">{data.title}</span>
                    <span className="authors">{data.authors.join(', ')}</span>
                </div>
                <div className="rightInfo">
                    <span className="price">{data.sale_price === -1 ? price : dcPrice}원</span>
                    <Button className="buyBtn"  onClick={() => window.open(`${data.url}`, '_blank')}>구매하기</Button>
                    <Button className="detailBtn" onClick={() => {
                        if (index === detailView) {
                            setDetailView(-1);
                            return;
                        }
                        setDetailView(index);
                    }}>
                        상세보기 <AiOutlineDown className="icon"/>
                    </Button>
                </div>
            </S.BookInfo>
        )
    };

    const BookDetailView = ({data}: {data:BookInfoTypes}) => {
        const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const dcPrice = data.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
            <S.BookDetailInfo>
                <img className="img" src={data.thumbnail} onClick={() => likeToggle({data})} />
                {likeList.includes(data.isbn) && (
                    <div className="likeIcon" onClick={() => likeToggle({data})}>
                        <img src={LikeIcon} />
                    </div>
                )}
                <div className="bookContents">
                    <div className="subject">
                        <span className="title">{data.title}</span>
                        <span className="authors">{data.authors.join(', ')}</span>
                    </div>
                    <label className="label">책 소개</label>
                    <div className="desc">
                        {data.contents}
                    </div>
                </div>
                <div className="bookPrice">
                    <Button className="detailBtn" onClick={() => {
                        setDetailView(-1);
                    }}>
                        상세보기 <AiOutlineUp className="icon"/>
                    </Button>
                    <div className="bottomItem">
                        <span className={classNames({
                            price: true,
                            originPrice: data.sale_price === -1,
                        })}>정가: 
                            <span className={classNames({
                                isDC: data.sale_price !== -1,
                            })}>{price}원</span>
                        </span>
                        {data.sale_price !== -1 && (<span className="price dcPrice">할인가: {dcPrice}원</span>)}
                        <Button className="buyBtn" onClick={() => window.open(`${data.url}`, '_blank')}>구매하기</Button>
                    </div>
                </div>
            </S.BookDetailInfo>
        )
    }

    return (
        <S.BooKListContainer>
            {data.map((book, index) => detailView === index ? 
                <BookDetailView key={index} data={book} /> : 
                <BookInfo key={index} data={book} index={index} />
            )}
        </S.BooKListContainer>
    )
};

export default BookList;