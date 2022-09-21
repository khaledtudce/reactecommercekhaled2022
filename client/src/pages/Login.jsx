import { useState } from "react";
import styled from "styled-components";

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
  const error = false;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {};

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="passowrd"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>Login</Button>
        </Form>
        {error && <Error>Something went wrong</Error>}
        <Link>Do not remember the password?</Link>
        <Link>Do not have an account?</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
