import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { popularProducts } from "../data";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Description = styled.div`
  height: 100%;
  background-color: brown;
`;

const Product = () => {
  const location = useLocation();
  const img = location.pathname.split("/")[2];
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={popularProducts[2].img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Description></Description>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
