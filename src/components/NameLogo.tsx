import styled from "styled-components";

const Container = styled.span`
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
`;

const FirstWord = styled.span`
  color: #58dbd4;
`;

const LastWord = styled.span`
  color: #ff7625;
`;

function NameLogo() {
  return (
    <Container>
      <FirstWord>Ken</FirstWord>
      <LastWord>Gomes</LastWord>
    </Container>
  );
}

export default NameLogo;
