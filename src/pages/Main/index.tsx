import React, {useState} from "react";
import { DefaultContainer } from "@/modules/Styled";
import Topbar from "@/components/common/Topbar";

import Search from "@/features/search/Searchs";
import Likes from "@/features/likes/Likes";

const Main: React.FC = () => {
    const [category, setCategory] = useState<'search' | 'likes'>('search');
    return (
        <DefaultContainer>
            <Topbar category={category} categorySet={setCategory} />
            {category === 'search' && (
                <Search />
            )}
             {category === 'likes' && (
                <Likes />
            )}
        </DefaultContainer>
    )
};

export default Main;