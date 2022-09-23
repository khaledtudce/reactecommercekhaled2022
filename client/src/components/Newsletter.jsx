import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #86a084;
  min-height: 45vh;
`;
const Title = styled.h1``;
const Desc = styled.div`
  font-size: 25px;
  font-weight: 350;
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 20px;
  border: 1px solid gray;
`;
const Input = styled.input`
  padding: 10px;
  width: 90%;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: teal;
  width: 10%;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products</Desc>
      <InputContainer>
        <Input placeholder="example@gmail.com"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
