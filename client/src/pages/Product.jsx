import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
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
  height: 90vh;
`;

const Title = styled.h1``;

const Description = styled.span``;

const Price = styled.h3``;
const FilterContainer = styled.div`
  display: flex;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;
const FilterTitle = styled.div``;
const FilterColor = styled.div`
  margin-left: 5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  margin: 30px;
  display: flex;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  height: 20px;
  width: 30px;
  border-radius: 30%;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-left: 30px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();
  const img = location.pathname.split("/")[2];

  const adjustQuantity = (operation) => {
    operation === "remove" && quantity > 1 && setQuantity(quantity - 1);
    operation === "add" && setQuantity(quantity + 1);
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={popularProducts[2].img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Colorful Shirt</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Price>$50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor
                color="red"
                onClick={(e) => setColor("red")}
              ></FilterColor>
              <FilterColor
                color="blue"
                onClick={(e) => setColor("blue")}
              ></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => adjustQuantity("remove")}>-</Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={() => adjustQuantity("add")}>+</Add>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
