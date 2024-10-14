import styled from "styled-components";
import { Typography } from "antd";
const { Text, Title } = Typography;

const Container = styled("div")`
  max-width: 700px;
`;

interface Props {
  title: string;
  content: string;
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
