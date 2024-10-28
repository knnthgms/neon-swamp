import styled from "styled-components";

export const SmallScreen = styled("div")`
  @media only screen and (max-width: 967px) {
    display: block;
  }
  display: none;
`;

export const LargeScreen = styled("div")`
  @media only screen and (max-width: 967px) {
    display: none;
  }
`;
