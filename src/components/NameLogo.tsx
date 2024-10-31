import styled from "styled-components";

const Container = styled.span`
  font-size: 2rem;
  cursor: pointer;
`;

const FirstWord = styled.span`
  font-weight: 800;
`;

const LastWord = styled.span`
  font-weight: 300;
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
