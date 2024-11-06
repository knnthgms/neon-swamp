// BackgroundLines.tsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface BackgroundLinesProps {
  lineColor?: string;
  highlightColor?: string;
}

const drop = keyframes`
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
`;

const Line = styled.div<{ color: string; highlight: string; delay: number }>`
  width: 1px;
  height: 100%;
  background: ${(props) => props.color};
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      ${(props) => props.highlight} 75%,
      ${(props) => props.highlight} 100%
    );
    animation: ${drop} 7s ${(props) => props.delay}s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
`;

const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  lineColor = "rgba(255, 255, 255, 0.1)",
  highlightColor = "rgba(255, 255, 255, 0.3)",
}) => {
  const [lineCount, setLineCount] = useState(24);

  useEffect(() => {
    const updateLineCount = () => {
      if (window.innerWidth >= 1024) {
        setLineCount(18); // Desktop
      } else if (window.innerWidth >= 768) {
        setLineCount(12); // Tablet
      } else {
        setLineCount(6); // Mobile
      }
    };

    updateLineCount();
    window.addEventListener("resize", updateLineCount);

    return () => window.removeEventListener("resize", updateLineCount);
  }, []);

  return (
    <Wrapper>
      {Array.from({ length: lineCount }).map((_, index) => (
        <Line
          key={index}
          color={lineColor}
          highlight={highlightColor}
          delay={2 + index * 0.5}
        />
      ))}
    </Wrapper>
  );
};

export default BackgroundLines;
