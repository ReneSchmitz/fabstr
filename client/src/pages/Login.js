import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/context";
import { loginUser } from "../context/actions";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import SecondLogo from "../components/SecondLogo";

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
        <InputMail
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          disabled={loading}
        />
        <InputPassword
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
        />
        <LoginButton type="submit" value="Submit" />
        {errorMessage && <p>{JSON.stringify(errorMessage)}</p>}
      </LoginContainer>
    </Container>
  );
}

export default LoginScreen;
