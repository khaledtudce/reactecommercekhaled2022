import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h2`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin: 15px;
  padding: 10px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log("quantity" + quantity);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="search"></Input>
              <Search style={{ fontSize: 16, color: "gray" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Kaynat.</Logo>
          </Center>
          <Right>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem>Login</MenuItem>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
