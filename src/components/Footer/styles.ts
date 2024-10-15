import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  padding: 2.5rem 0;
  margin: 4rem 0 0 0;

  @media only screen and (max-width: 1024px) {
    margin: 2rem 0 0 0;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const Chat = styled("p")`
  color: #18216d;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin: 1rem 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const FooterContainer = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s ease-in-out;
  font-size: 1.8rem;
`;
