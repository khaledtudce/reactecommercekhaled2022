import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove, RemoveCircle } from "@material-ui/icons";
import Footer from "../components/Footer";
import { removeProduct, reset } from "../redux/wishRedux";
import { addProduct } from "../redux/cartRedux";

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
const AddToCartButton = styled.button`
  margin: 0px 20px 30px;
  padding: 10px;
  left: 0;
  width: 25%;
  cursor: pointer;
  color: white;
  background-color: #9ee2a2;
`;

const Wishlist = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addToCart = (e, item) => {
    e.preventDefault();
    dispatch(addProduct(item));
    dispatch(removeProduct(item));
  };
  const handleRemove = (e, product) => {
    e.preventDefault();
    dispatch(removeProduct(product));
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(reset());
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
              <Link to={"/cart"}>
                <TopMiddleContentItem>
                  {t("shopping_bag")}({cart.quantity})
                </TopMiddleContentItem>
              </Link>
              <TopMiddleContentItem>
                {t("your_wishlist")}({wishlist.products.length})
              </TopMiddleContentItem>
              <TopMiddleContentItem onClick={(e) => handleReset(e)}>
                {t("reset_wishlist")}
              </TopMiddleContentItem>
            </TopMiddleContent>
            <TopButton color="black">{t("checkout_now")}</TopButton>
          </TopSecondRow>
        </Top>
        <Bottom>
          <BottomProductList>
            {wishlist.products.map((item) => (
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
                  <AddToCartButton onClick={(e) => addToCart(e, item)}>
                    Add To Cart
                  </AddToCartButton>
                </ProductDesc>
                <ProductAmountPrice>
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
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
