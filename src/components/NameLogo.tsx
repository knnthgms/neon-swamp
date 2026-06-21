import styled from "styled-components";
import { useTheme } from "../theme/ThemeProvider";

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const First = styled.span`
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.heading};
`;

const Last = styled.span`
  font-weight: 200;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.heading};
`;

function NameLogo() {
  const { isDarkMode } = useTheme();
  const rectFill = isDarkMode ? "#1e4448" : "rgba(26,58,51,0.08)";
  const textFill = isDarkMode ? "#befcae" : "#1a3a33";

  return (
    <Container>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="7" fill={rectFill} />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="'Menlo','Courier New',monospace"
          fontWeight="700"
          fontSize="13"
          fill={textFill}
        >
          K&gt;G
        </text>
      </svg>
      <span style={{ fontSize: "1.05rem", lineHeight: 1 }}>
        <First>Ken</First>
        <Last>Gomes</Last>
      </span>
    </Container>
  );
}

export default NameLogo;
