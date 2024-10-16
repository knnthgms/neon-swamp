import styled from "styled-components";
import { Typography } from "antd";
import { ReactNode } from "react";
const { Text, Title } = Typography;

const Container = styled("div")`
  max-width: 600px;
`;

interface Props {
  title: string;
  content: string | ReactNode;
}

const TextWithTitle = ({ title, content }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Container>
  );
};

export default TextWithTitle;
