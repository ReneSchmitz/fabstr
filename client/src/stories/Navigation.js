import styled from "styled-components/macro";
import PropTypes from "prop-types";

import home from "../assets/icon/home.svg";
import list from "../assets/icon/list.svg";
import calender from "../assets/icon/calender.svg";
import face from "../assets/icon/face.svg";

const Footer = styled.footer`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  align-items: center;
  min-height: 15vh;
  background-color: #ffffff;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px -3px 20px #0d569f29;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100vw;
  padding: 0px;
`;

const NavItem = styled.li`
  color: ${(props) => (props.active ? "red" : "blau")};
  list-style: none;
  align-items: center;

  img {
    width: 50%;
  }
`;

export default function Navigation({ activePath }) {
  return (
    <Footer>
      <Nav>
        <NavItem active={activePath === "/"}>
          <img src={home} alt="home" />
        </NavItem>
        <NavItem active={activePath === "/list"}>
          <img src={list} alt="list" />
        </NavItem>
        <NavItem active={activePath === "/calender"}>
          <img src={calender} alt="calender" />
        </NavItem>
        <NavItem active={activePath === "/mood"}>
          <img src={face} alt="mood" />
        </NavItem>
      </Nav>
    </Footer>
  );
}

Navigation.propTypes = {
  activePath: PropTypes.string,
};
