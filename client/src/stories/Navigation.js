import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Footer = styled.footer`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  align-items: center;
  min-height: 20vh;
  background-color: #ffffff;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

const NavItem = styled.li`
  color: ${(props) => (props.active ? "red" : "blau")};
`;

export default function Navigation({ activePath }) {
  return (
    <Footer>
      <Nav>
        <NavItem active={activePath === "/"}>Home</NavItem>
        <NavItem active={activePath === "/list"}>List</NavItem>
        <NavItem active={activePath === "/calender"}>Calender</NavItem>
        <NavItem active={activePath === "/mood"}>Mood</NavItem>
      </Nav>
    </Footer>
  );
}

Navigation.propTypes = {
  activePath: PropTypes.string,
};
