import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;
  z-index: 999;
  background: rgb(224, 224, 224);
  &:hover,
  &:active,
  &:focus {
    background: rgb(241, 242, 243);
  }
`;
