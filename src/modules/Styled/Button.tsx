import React from "react";
import styled from "styled-components";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    [x: string]: any;
}

const MyButton: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <ButtonStyles {...props} onClick={onClick}>
            {children}
        </ButtonStyles>
    );
};

export default MyButton;

const ButtonStyles = styled.button`
    color: #ccc;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        color: #aaa;
        border-color: #aaa;
    }
`;