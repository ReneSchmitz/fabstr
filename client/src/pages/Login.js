import styled from "styled-components";
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
  return (
    <Container>
      <SecondLogo />
      <LoginContainer>
        <InputMail />
        <InputPassword />
        <LoginButton />
      </LoginContainer>
    </Container>
  );
}

export default LoginScreen;
