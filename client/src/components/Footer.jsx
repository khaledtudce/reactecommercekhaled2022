import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div`
  background-color: lightgreen;
  min-height: 40vh;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const LeftTitle = styled.h1``;
const LeftDesc = styled.div`
  font-size: 20px;
`;
const LeftSocialMediaLogos = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const RoundBackground = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Middle = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2``;
const MiddleDesc = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const MiddleDescItems = styled.li`
  cursor: pointer;
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const RightItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Left>
        <LeftTitle>{t("logo_name")}</LeftTitle>
        <LeftDesc>This is the footer of the application</LeftDesc>
        <LeftSocialMediaLogos>
          <RoundBackground color="blue">
            <Facebook />
          </RoundBackground>
          <RoundBackground color="green">
            <Twitter />
          </RoundBackground>
          <RoundBackground color="red">
            <Instagram />
          </RoundBackground>
          <RoundBackground color="gray">
            <Pinterest />
          </RoundBackground>
        </LeftSocialMediaLogos>
      </Left>
      <Middle>
        <Title>{t("userful_links")}</Title>
        <MiddleDesc>
          <MiddleDescItems>Home</MiddleDescItems>
          <MiddleDescItems>Cart</MiddleDescItems>
          <MiddleDescItems>Man Fashion</MiddleDescItems>
          <MiddleDescItems>Woman Fashion</MiddleDescItems>
          <MiddleDescItems>Accessories</MiddleDescItems>
          <MiddleDescItems>My Account</MiddleDescItems>
          <MiddleDescItems>Order Tracking</MiddleDescItems>
          <MiddleDescItems>Wishlist</MiddleDescItems>
          <MiddleDescItems>Terms</MiddleDescItems>
        </MiddleDesc>
      </Middle>
      <Right>
        <Title>{t("contact")}</Title>
        <RightItem>
          <Room /> Grevesmühlener Straße 51
        </RightItem>
        <RightItem>
          <Phone /> +491478254568
        </RightItem>
        <RightItem>
          <MailOutline style={{ marginRight: "10px" }} /> khaledreza@gmail.com
        </RightItem>
        <RightItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </RightItem>
      </Right>
    </Container>
  );
};

export default Footer;
