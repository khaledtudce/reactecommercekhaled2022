import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { useTranslation } from "react-i18next";

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
`;
const Select = styled.select`
  padding: 5px;
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
  &:hover {
    background-color: #99b393;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log("user logged out");
  };
  const handleLanguageSelect = (selectedLanguage) => {
    if (selectedLanguage === "en") i18n.changeLanguage("en-US");
    if (selectedLanguage === "de") i18n.changeLanguage("de-DE");
    if (selectedLanguage === "bd") i18n.changeLanguage("bd-BD");
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>
              <Select onChange={(e) => handleLanguageSelect(e.target.value)}>
                <option value="en">en</option>
                <option value="de">de</option>
                <option value="bd">bd</option>
              </Select>
            </Language>
            <SearchContainer>
              <Input placeholder="search"></Input>
              <Search style={{ fontSize: 16, color: "gray" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>{t("logo_name")}</Logo>
          </Center>
          <Right>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem>{t("home")}</MenuItem>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>{t("register")}</MenuItem>
            </Link>
            {currentUser ? (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <MenuItem>{currentUser.username}</MenuItem>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={(e) => handleClick(e)}>
                    {t("logout")}
                  </MenuItem>
                </Link>
              </>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>{t("login")}</MenuItem>
              </Link>
            )}
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
