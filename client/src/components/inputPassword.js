import styled from "styled-components/macro";

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

export const InputPassword = () => {
  return (
    <>
      <Input>
        <HeaderFour>Password</HeaderFour>

        <Icon src={Lock} alt="lock" />

        <PwdInput type="password" placeholder="*************" />
      </Input>
    </>
  );
};
