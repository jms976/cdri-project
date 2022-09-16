import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styled from "styled-components";

interface InputContainer {
  width?: string;
}

interface InputOptions {
  isCount?: boolean;
  isValid?: boolean;
  isError?: boolean;
}

interface InputBoxProps {
  [x: string]: any;
  /** 글자수 제한 사용여부 */
  isCount?: boolean;
  /** 최대 글자수 */
  maxLength?: number;
  /** 유효성 검사값 */
  isValid?: boolean;
  /** 에러표시 */
  isError?: boolean;
  /** 값 변경시 */
  onChange: (e: any) => void;

  isDisabled?: boolean;
}

/** 인풋 컨테이너 */
const Container = styled.div<InputContainer>`
  position: relative;
  width: ${(props) => props.width};
`;

/** 인풋 스타일 */
const Input = styled.input<InputOptions>`
  position: relative;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
  background-color: rgb(255, 255, 255);
  color: var(--black);
  outline: none;
  padding: ${(props) =>
    props.isCount ? "0px calc(54px) 0px 10px" : "0px 10px"};
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.isValid ? "rgb(229, 230, 235)" : "rgb(255, 0, 0)"};
  border-image: initial;

  &:focus {
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      props.isValid ? "rgb(55, 125, 255)" : "rgb(255, 0, 0)"};
    border-image: initial;

    ${(props) =>
      props.isError &&
      `
            border-color: #d45027;
        `}
  }

  &[disabled] {
    background-color: hsl(0, 0%, 95%);
    border-color: hsl(0, 0%, 90%);
    color: hsl(0, 0%, 60%);
  }
  ${(props) =>
    props.disabled &&
    `
            background-color: red
        `}

  ${(props) =>
    props.isError &&
    `
        border-color: #d45027;
    `}
`;

/** 글자수 카운트 */
const CountLangs = styled.span`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  font-size: 11px;
  color: rgb(148, 148, 148);
  position: absolute;
  height: 20px;
  width: 44px;
  left: calc((100% - 44px) - 10px);
  top: 50%;
  transform: translateY(-50%);
`;

/** 아이콘 */
const SearchIcon = styled.span`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(148, 148, 148);
  position: absolute;
  height: 29px;
  width: 30px;
  left: calc(100% - 44px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const InputBox: React.FC<InputBoxProps> = ({
  onChange,
  isCount,
  maxLength,
  isValid = true,
  isError = false,
  width,
  isDisabled,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [valueLen, setValueLen] = useState(0);

  /**
   * onChange
   * @param e
   */
  const handleChange = (e: any) => {
    if (isCount && maxLength && e.target.value.length > maxLength) return;
    setValue(e.target.value);
    setValueLen(e.target.value.length);
    onChange(e);
  };

  useEffect(() => {
    if (!props.value) return;

    setValue(props.value);
    setValueLen(props.value.length);
  }, [props.value]);

  return (
    <>
      <Container width={width}>
        <Input
          isCount={isCount}
          isValid={isValid}
          isError={isError}
          value={value}
          onChange={handleChange}
          autoComplete={"off"}
          {...props}
          disabled={isDisabled}
        />
        {isCount && (
          <CountLangs>
            {valueLen} / {maxLength}
          </CountLangs>
        )}
      </Container>
    </>
  );
};

export default InputBox;
