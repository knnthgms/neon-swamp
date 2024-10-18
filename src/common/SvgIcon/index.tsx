import styled from "styled-components";
import { SvgIconProps } from "../types";

const SvgElement = styled.img`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <SvgElement src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
