import styled, { css } from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icon/home.svg";
import { ReactComponent as List } from "../assets/icon/list.svg";
import { ReactComponent as Calendar } from "../assets/icon/calendar.svg";
import { ReactComponent as Active } from "../assets/icon/info.svg";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 11vh;
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
  list-style: none;
  align-items: center;
`;
const Icon = css`
  fill: ${(props) => (props.active ? "#F2C384" : "#808080")};
  padding: ${(props) => (props.active ? "10px" : "14px")};
  background-image: ${(props) =>
    props.active
      ? "linear-gradient(120deg, #fafafa 0%, #eff2f8 100%)"
      : "none"};
  transform: ${(props) => (props.active ? "scale(1.1)" : "none")};
  box-sizing: border-box;
  border-radius: 50%;
`;
const HomeIcon = styled(Home)`
  ${Icon}
`;

const ListIcon = styled(List)`
  ${Icon}
`;

const CalendarIcon = styled(Calendar)`
  ${Icon}
`;

const ActivIcon = styled(Active)`
  ${Icon}
`;

export default function Navigation({ activePath }) {
  return (
    <Footer>
      <Nav>
        <NavItem>
          <Link to="/">
            <HomeIcon active={activePath === "/"} />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/list">
            <ListIcon active={activePath === "/list"} />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/calendar">
            <CalendarIcon active={activePath === "/calendar"} />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/activity">
            <ActivIcon active={activePath === "/activity"} />
          </Link>
        </NavItem>
      </Nav>
    </Footer>
  );
}

Navigation.propTypes = {
  activePath: PropTypes.string,
};
