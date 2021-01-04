import styled from "styled-components/macro";

const Button = styled.button`
  height: 3.5rem;
  padding: 10px 40px;
  border-radius: 30px;
  background: #f2c384;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 800;
`;

export default function LoginButton() {
  return (
    <>
      <Button>Login</Button>
    </>
  );
}
