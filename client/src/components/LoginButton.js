import styled from "styled-components/macro";

const Button = styled.button`
  height: 3.5rem;
  width: 450px;
  padding: 20px 40px;
  border-radius: 30px;
  background: #f2c384;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
`;

export default function LoginButton() {
  return (
    <>
      <Button>Login</Button>
    </>
  );
}
