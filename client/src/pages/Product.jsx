import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

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
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const adjustQuantity = (operation) => {
    operation === "remove" && quantity > 1 && setQuantity(quantity - 1);
    operation === "add" && setQuantity(quantity + 1);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/" + productId);
        setProduct(res.data);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      } catch (error) {
        console.log("Could not retrieve Product");
      }
    };
    getProduct();
  }, [productId]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  key={c}
                  color={c}
                  onClick={() => setColor(c)}
                ></FilterColor>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => adjustQuantity("remove")}>-</Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={() => adjustQuantity("add")}>+</Add>
            </AmountContainer>
            <Button onClick={handleClick}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
