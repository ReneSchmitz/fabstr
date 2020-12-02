import styled, { css } from "styled-components/macro";
import PropTypes from "prop-types";
import { ReactComponent as Home } from "../assets/icon/home.svg";
import { ReactComponent as List } from "../assets/icon/list.svg";
import { ReactComponent as Calender } from "../assets/icon/calender.svg";
import { ReactComponent as Info } from "../assets/icon/info.svg";

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

  img {
    width: 50%;
  }
`;
const Icon = css`
  width: 50%;
  fill: ${(props) => (props.active ? "red" : "blau")};
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
  return (
    <Footer>
      <Nav>
        <NavItem>
          <HomeIcon active={activePath === "/"} />
        </NavItem>
        <NavItem>
          <ListIcon active={activePath === "/list"} />
        </NavItem>
        <NavItem>
          <CalenderIcon active={activePath === "/calender"} />
        </NavItem>
        <NavItem>
          <MoodIcon active={activePath === "/mood"} />
        </NavItem>
      </Nav>
    </Footer>
  );
}

Navigation.propTypes = {
  activePath: PropTypes.string,
};
