import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { popularProducts } from "../data";
import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div``;
const Top = styled.div``;
const TopTitle = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: 300;
`;
const TopSecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  margin: 0px 30px 30px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.color};
`;
const TopMiddleContent = styled.div`
  display: flex;
  gap: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
const TopMiddleContentItem = styled.div``;

const Bottom = styled.div`
  margin: 30px;
  display: flex;
`;
const BottomProductList = styled.div`
  flex: 3;
`;
const BottomProductItem = styled.div`
  display: flex;
  height: 40vh;
`;
const ProductImage = styled.img`
  flex: 1;
  max-height: 38vh;
  object-fit: cover;
`;
const ProductDesc = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.div`
  margin: 20px;
`;
const Id = styled.div`
  margin: 20px;
`;
const Color = styled.div`
  margin-left: 20px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Size = styled.div`
  margin: 20px;
`;
const ProductAmountPrice = styled.div`
  flex: 1;
`;
const Amount = styled.div`
  margin: 20px;
  display: flex;
  font-size: 22px;
  font-weight: 500;
`;
const Quantity = styled.div``;
const Price = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: 400;
`;
const BottomOrderSummery = styled.div`
  flex: 1;
  max-height: 60vh;
  border: 1px solid;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
`;
const OderSummeryItem = styled.div`
  margin: 10px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  justify-content: space-between;
`;
const OrderSummeryItemText = styled.div``;
const OrderSummeryItemPrice = styled.div``;
const CheckoutButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: black;
`;

const Cart = () => {
  const [quantity, setQuantity] = useState(3);
  const adjustQuantity = (operation) => {
    operation === "add" && setQuantity(quantity + 1);
    operation === "remove" && quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Top>
          <TopTitle>Your Bag</TopTitle>
          <TopSecondRow>
            <TopButton color="gray">Continue Shopping</TopButton>
            <TopMiddleContent>
              <TopMiddleContentItem>Shopping Bag(2)</TopMiddleContentItem>
              <TopMiddleContentItem>Your Wishlist(0)</TopMiddleContentItem>
            </TopMiddleContent>
            <TopButton color="black">Checkout Now</TopButton>
          </TopSecondRow>
        </Top>
        <Bottom>
          <BottomProductList>
            <BottomProductItem>
              <ProductImage src={popularProducts[2].img}></ProductImage>
              <ProductDesc>
                <ProductName>
                  <b>Product:</b> Herman Coat
                </ProductName>
                <Id>
                  <b>Id:</b> {"6309eef77091cf8e8fe6d20f"}
                </Id>
                <Color color="pink"></Color>
                <Size>
                  <b>Size:</b> L
                </Size>
              </ProductDesc>
              <ProductAmountPrice>
                <Amount>
                  <Add onClick={() => adjustQuantity("add")}>+</Add>
                  <Quantity>{quantity}</Quantity>
                  <Remove onClick={() => adjustQuantity("remove")}>-</Remove>
                </Amount>
                <Price>$150</Price>
              </ProductAmountPrice>
            </BottomProductItem>
            <BottomProductItem>
              <ProductImage src={popularProducts[0].img}></ProductImage>
              <ProductDesc>
                <ProductName>
                  <b>Product:</b> T Shirt cool
                </ProductName>
                <Id>
                  <b>Id:</b> {"6309eef77091cf8e8fe6d20f"}
                </Id>
                <Color color="green"></Color>
                <Size>
                  <b>Size:</b> L
                </Size>
              </ProductDesc>
              <ProductAmountPrice>
                <Amount>
                  <Add onClick={() => adjustQuantity("add")}>+</Add>
                  <Quantity>{quantity}</Quantity>
                  <Remove onClick={() => adjustQuantity("remove")}>-</Remove>
                </Amount>
                <Price>$150</Price>
              </ProductAmountPrice>
            </BottomProductItem>
          </BottomProductList>
          <BottomOrderSummery>
            <OderSummeryItem fontSize="30px" fontWeight="200">
              Order Summery
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>Subtotal:</OrderSummeryItemText>
              <OrderSummeryItemPrice>$350</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>Estimated Shipping:</OrderSummeryItemText>
              <OrderSummeryItemPrice>$5.90</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>Shipping Discount:</OrderSummeryItemText>
              <OrderSummeryItemPrice>$5.90</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="30px" fontWeight="600">
              <OrderSummeryItemText>Total:</OrderSummeryItemText>
              <OrderSummeryItemPrice>$350</OrderSummeryItemPrice>
            </OderSummeryItem>
            <CheckoutButton>Checkout Now</CheckoutButton>
          </BottomOrderSummery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
