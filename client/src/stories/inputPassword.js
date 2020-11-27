import styled from "styled-components/macro";

// inputcard
export const InputPassword = styled.div`
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

// h4
export const HeaderFour = styled.h4`
  grid-area: header;
  align-self: end;
  padding: 10px 0px 5px 0px;
  font-weight: 400;
`;
// img

export const Icon = styled.img`
  display: grid;
  align-self: center;
  grid-area: image;
`;

// input
export const InputPwd = styled.input`
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
