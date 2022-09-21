import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(145, 130, 130, 0.5), rgba(60, 109, 86, 0.5)),
    url("https://i.ibb.co/cXFnLLV/3.png") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 10px;
  padding: 10px;
`;
const Agreement = styled.a`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  font-size: xx-small;
`;
const Button = styled.button`
  width: 50%;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" type="password" />
        </Form>
        <Agreement>
          By creating account, you are accepting company rules and regulations
        </Agreement>
        <Button>Create Account</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
