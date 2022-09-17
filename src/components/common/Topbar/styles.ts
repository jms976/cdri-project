import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  z-index: 10;
  background-color: #fcfcfc;
  padding: 0 160px;
  ul {
    display: flex;
    margin: auto;
    cursor: pointer;
    li {
        margin: 5px;
    }
    .active {
        color: red;
    }
  }
`;