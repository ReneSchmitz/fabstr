import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/context";
import { loginUser } from "../context/actions";
import LoginButton from "../components/LoginButton";
import SecondLogo from "../components/SecondLogo";

import Mail from "../assets/icon/mail.svg";
import Lock from "../assets/icon/lock.svg";

const Input = styled.div`
  display: grid;
  grid-template-columns: 35px auto;
  grid-template-rows: 5px auto 40px 5px;
  grid-template-areas:
    "wrapper wrapper"
    "header header "
    "image main "
    "footer footer";
  width: 450px;
  padding: 20px 40px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 30px 30px 60px #0d569f29, -10px -10px 70px #ffffff;
`;

const HeaderFour = styled.h4`
  grid-area: header;
  align-self: end;
  padding: 10px 0px 5px 0px;
  font-weight: 400;
`;

const Icon = styled.img`
  display: grid;
  align-self: center;
  grid-area: image;
`;

const MailInput = styled.input`
  display: grid;
  align-self: left;
  grid-area: main;
  margin-top: 2px;
  margin-left: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: 400;
`;

const PwdInput = styled.input`
  display: grid;
  align-self: left;
  grid-area: main;
  margin-top: 6px;
  margin-left: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: content;
  place-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #eff2f8;
`;
const LoginContainer = styled.form``;

function LoginScreen() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(dispatch, { mail, password });
      if (!response?.mail) return;
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SecondLogo />
      <LoginContainer onSubmit={handleSubmit}>
        <Input>
          <HeaderFour>Email Address</HeaderFour>
          <Icon src={Mail} alt="mail" />

          <MailInput
            type="email"
            placeholder="Username@gmail.com"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            disabled={loading}
          />
        </Input>
        <Input>
          <HeaderFour>Password</HeaderFour>

          <Icon src={Lock} alt="lock" />

          <PwdInput
            type="password"
            placeholder="*************"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={loading}
          />
        </Input>
        <LoginButton type="submit" value="Submit" />
        {errorMessage && <p>{JSON.stringify(errorMessage)}</p>}
      </LoginContainer>
    </Container>
  );
}

export default LoginScreen;
