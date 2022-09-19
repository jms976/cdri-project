import styled from "styled-components";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
// import Select, { OptionTypeBase, components } from "react-select";
import Select from "react-select";

/** 셀렉트 박스 컨테이너 */
const Container = styled.div``;

/** react-select 커스텀 스타일 */
const customStyles = {
  control: (styles: any, state: any) => {
    return {
      ...styles,
      boxShadow: "none",
      borderRadius: state.menuIsOpen ? "4px 4px 0 0" : "4px",
      minHeight: state.selectProps.minHeight ? state.selectProps.minHeight : 25,
      height: "100%",
      borderColor: "rgb(229,230,235)",
      cursor: "pointer",
    };
  },
  valueContainer: (styles: any, state: any) => ({
    ...styles,
    fontSize: 13,
    color: "#767676",
    height: "100%",
  }),
  indicatorSeparator: (styles: any, state: any) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles: any, state: any) => ({
    ...styles,
    padding: "0 5px",
    fontSize: 21,
  }),
  clearIndicator: (styles: any, state: any) => ({
    ...styles,
    svg: {
      width: 15,
      height: 15,
    },
  }),
  menu: (styles: any, state: any) => ({
    ...styles,
    margin: "0 1px 1px",
    borderRadius: "0 0 4px 4px",
    boxShadow: "0 0 0 1px rgb(55, 125, 255)",
    width: "calc(100% - 2px)",
    padding: 0,
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    color: state.isDisabled ? "#989898" : "#767676",
    backgroundColor: state.isDisabled ? "#f2f2f2" : "#fff",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    padding: "0 0 0 15px",
    fontSize: 13,
    height: 30,
    lineHeight: "30px",
    ":hover": {
      backgroundColor: "rgb(233, 241, 254)",
    },
    overflow: state.data.isOverflow ? "none" : "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
  noOptionsMessage: (styles: any, state: any) => ({
    ...styles,
    padding: 0,
    fontSize: 13,
  }),
};

/** Arrow 아이콘 */
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdArrowDropDown />
    </components.DropdownIndicator>
  );
};

const SelectWrapper: React.FC<OptionTypeBase> = (options) => {
  return (
    <Container
      onClick={(e: any) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Select
        {...options}
        isSearchable={options.isSearchable || false}
        styles={customStyles}
        components={{ DropdownIndicator }}
        onChange={options.onChange}
        isDisabled={options.disabled}
        menuPortalTarget={document.querySelector("body")}
      />
    </Container>
  );
};

export default React.memo(SelectWrapper);
