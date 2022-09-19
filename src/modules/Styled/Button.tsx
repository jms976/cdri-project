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
    cursor: pointer;
    background: #4880EE;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    padding: 7px 12px;
`;