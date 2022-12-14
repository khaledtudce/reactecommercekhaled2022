import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { firtLoginDone } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(201, 191, 191, 0.5), rgba(76, 119, 88, 0.5)),
    url("https://i.ibb.co/cXFnLLV/3.png") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  width: 50%;
`;
const Error = styled.div`
  color: red;
`;
const Link = styled.a`
  padding: 10px;
  font-size: xx-small;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error, isNewRegistered } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (isNewRegistered) dispatch(firtLoginDone());
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="usernamelogin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="passwordlogin"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            data-testid="submitButton"
            onClick={(e) => handleClick(e)}
            disabled={!username || !password}
          >
            {isFetching ? "Please wait" : "Login"}
          </Button>
        </Form>
        {error && <Error>Something went wrong</Error>}
        <Link>Do not remember the password?</Link>
        <Link>Do not have an account?</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
