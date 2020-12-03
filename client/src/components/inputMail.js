import styled from "styled-components/macro";

import Mail from "../assets/icon/mail.svg";

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

export const InputMail = () => {
  return (
    <>
      <Input>
        <HeaderFour>Email Address</HeaderFour>
        <Icon src={Mail} alt="mail" />

        <MailInput type="email" placeholder="Username@gmail.com" />
      </Input>
    </>
  );
};
