import styled from "styled-components/macro";
// import happy from "../assets/icon/smile.svg";
// import sad from "../assets/icon/sad.svg";
// import PropTypes from "prop-types";

const Header = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  position: fixed;
  top: 25%;
  display: grid;
  place-self: left;
`;

const Text = styled.h2`
  position: fixed;
  top: 39%;
  display: grid;
  place-self: left;
`;

const Container = styled.div`
  position: fixed;
  top: 57%;
`;

export default function HappyComp() {
  return (
    <>
      {/* By default */}
      <Header>Hi Lisa,</Header>
      <Text>wie geht es dir heute?</Text>
      {/* 2x icons */}
      <Container></Container>
    </>
  );
}

// const HappyComp = ({ happy, sad, normal }) => {
//   return (
//     <>
//       {/* By default */}
//       <Header>Hi Lisa,</Header>
//       <Text>wie geht es dir heute?</Text>
//       {/* 2x icons */}
//       <Container>
//         <Happiness src={happy} alt="happy" />
//         <Sadness src={sad} alt="sad" />
//         <Normal src={normal} alt="normal" />
//       </Container>
//     </>
//   );
// };
// HappyComp.propTypes = {
//   happy: PropTypes.string.isRequired,
//   sad: PropTypes.string.isRequired,
//   normal: PropTypes.string.isRequired,
// };
// export default HappyComp;
