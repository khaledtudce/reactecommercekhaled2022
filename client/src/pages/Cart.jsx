import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove, RemoveCircle } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { adjustQuantities, removeProduct, reset } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addProduct } from "../redux/wishRedux";

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
  max-height: 70vh;
  border: 1px solid;
  border-radius: 5%;
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
const AddToWishlistButton = styled.button`
  margin: 0px 20px 30px;
  padding: 10px;
  left: 0;
  width: 25%;
  cursor: pointer;
  color: white;
  background-color: #9ee2a2;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleRemove = (e, product) => {
    e.preventDefault();
    dispatch(removeProduct(product));
  };
  const adjustQuantity = (operation, item) => {
    dispatch(adjustQuantities({ operation, item }));
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(reset());
  };
  const addToWishlist = (e, item) => {
    e.preventDefault();
    dispatch(addProduct(item));
    dispatch(removeProduct(item));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Top>
          <TopTitle>{t("your_bag")}</TopTitle>
          <TopSecondRow>
            <Link to={"/products"}>
              <TopButton color="gray">{t("continue_shopping")}</TopButton>
            </Link>
            <TopMiddleContent>
              <TopMiddleContentItem>
                {t("shopping_bag")}({cart.quantity})
              </TopMiddleContentItem>
              <Link to={"/wishlist"}>
                <TopMiddleContentItem>
                  {t("your_wishlist")}({wishlist.products.length})
                </TopMiddleContentItem>
              </Link>
            </TopMiddleContent>
            <TopButton color="black">{t("checkout_now")}</TopButton>
          </TopSecondRow>
        </Top>
        <Bottom>
          <BottomProductList>
            {cart.products.map((item) => (
              <BottomProductItem key={item._id}>
                <ProductImage src={item.img}></ProductImage>
                <ProductDesc>
                  <ProductName>
                    <b>Product:</b> {item.title}
                  </ProductName>
                  <Id>
                    <b>Id:</b> {item._id}
                  </Id>
                  <Color color={item.color}></Color>
                  <Size>
                    <b>Size:</b> {item.size}
                  </Size>
                  <AddToWishlistButton onClick={(e) => addToWishlist(e, item)}>
                    Add To Wishlist
                  </AddToWishlistButton>
                </ProductDesc>
                <ProductAmountPrice>
                  <Amount>
                    <Add onClick={() => adjustQuantity("add", item)}>+</Add>
                    <Quantity>{item.quantity}</Quantity>
                    <Remove onClick={() => adjustQuantity("remove", item)}>
                      -
                    </Remove>
                  </Amount>
                  <Price>${item.price * item.quantity}</Price>
                  <RemoveCircle
                    onClick={(e) => handleRemove(e, item)}
                    style={{
                      margin: "30px",
                      cursor: "pointer",
                    }}
                  />
                </ProductAmountPrice>
              </BottomProductItem>
            ))}
          </BottomProductList>
          <BottomOrderSummery>
            <OderSummeryItem fontSize="30px" fontWeight="200">
              {t("order_summery")}
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>{t("subtotal")}:</OrderSummeryItemText>
              <OrderSummeryItemPrice>${cart.total}</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>
                {t("estimated_shipping")}:
              </OrderSummeryItemText>
              <OrderSummeryItemPrice>$5.90</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="20px" fontWeight="400">
              <OrderSummeryItemText>
                {t("shipping_discount")}:
              </OrderSummeryItemText>
              <OrderSummeryItemPrice>$5.90</OrderSummeryItemPrice>
            </OderSummeryItem>
            <OderSummeryItem fontSize="30px" fontWeight="600">
              <OrderSummeryItemText>{t("total")}:</OrderSummeryItemText>
              <OrderSummeryItemPrice>${cart.total}</OrderSummeryItemPrice>
            </OderSummeryItem>
            <CheckoutButton>{t("checkout_now")}</CheckoutButton>
            <CheckoutButton onClick={(e) => handleReset(e)}>
              {t("reset")}
            </CheckoutButton>
          </BottomOrderSummery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
