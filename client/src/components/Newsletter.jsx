import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("newsletter")}</Title>
      <Desc>{t("get_timely_updates_from_your_favourite_products")}</Desc>
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
