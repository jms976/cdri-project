import React, { useState, useEffect } from "react";
import classNames from "classnames";
import * as S from "./styles";

interface TopbarProps {
    category: 'search' | 'likes';
    categorySet: (state: 'search' | 'likes') => void;
}
const Topbar: React.FC<TopbarProps> = ({category, categorySet}) => {
    return (
        <S.Container>
            <span>CERTICOS BOOKS</span>
            <ul>
                <li className={classNames({
                    active: category === 'search'
                })} onClick={() => categorySet('search')}>도서검색</li>
                <li className={classNames({
                    active: category === 'likes'
                })}onClick={() => categorySet('likes')}>내가 찜한 책</li>
            </ul>
        </S.Container>
    )
    
};

export default Topbar;