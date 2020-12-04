import styled, { css } from "styled-components/macro";
import PropTypes from "prop-types";
import { ReactComponent as Home } from "../assets/icon/home.svg";
import { ReactComponent as List } from "../assets/icon/list.svg";
import { ReactComponent as Calender } from "../assets/icon/calender.svg";
import { ReactComponent as Info } from "../assets/icon/info.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  list-style: none;
  align-items: center;
`;
const Icon = css`
  fill: ${(props) => (props.active ? "#F2C384" : "#808080")};
  padding: ${(props) => (props.active ? "-20px" : "0px")};
  background-image: ${(props) =>
    props.active
      ? "linear-gradient(120deg, #fafafa 0%, #eff2f8 100%)"
      : "none"};
  box-sizing: border-box;
  padding: 13px;
  border-radius: 50%;
`;
const HomeIcon = styled(Home)`
  ${Icon}
`;

const ListIcon = styled(List)`
  ${Icon}
`;

const CalenderIcon = styled(Calender)`
  ${Icon}
`;

const MoodIcon = styled(Info)`
  ${Icon}
`;

export default function Navigation({ activePath }) {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <Footer>
      <Nav>
        <NavItem>
          <HomeIcon active={location.activePath === "/"} />
        </NavItem>
        <NavItem>
          <ListIcon active={location.activePath === "/list"} />
        </NavItem>
        <NavItem>
          <CalenderIcon active={location.activePath === "/calender"} />
        </NavItem>
        <NavItem>
          <MoodIcon active={location.activePath === "/mood"} />
        </NavItem>
      </Nav>
    </Footer>
  );
}

Navigation.propTypes = {
  activePath: PropTypes.string,
};