import styled from "styled-components/macro";
import Preparation from "./DailyCardPreparation";
import UnloadingPhase from "./DailyCardUnloading";
import FastingPhase from "./DailyCardFasting";
import LoadingPhase from "./DailyCardLoading";
import UsefulTipps from "./DailyCardUsefulTipps";

const Container = styled.div`
  position: fixed;
`;

const SectionSlider = styled.section`
  display: grid;
  grid-column-gap: 1.5em;
`;

const SlideHolder = styled.div`
  position: relative;
  align-items: start;
  top: 12%;
  left: 0;
  display: grid;
  overflow: auto;
  padding: 15% 5% 20%;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  grid-column-gap: 1.5em;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 0 0 20px;
  @media (min-device-width: 900px) {
    margin-bottom: 20%;
  }
`;

const Slide = styled.div`
  scroll-snap-align: start;
`;

const Spacing = styled.div`
  width: 20px;
  padding-right: 20px;
`;

export default function Slider() {
  return (
    <Container>
      <SectionSlider>
        <SlideHolder>
          <Slide>
            <Preparation />
          </Slide>

          <Slide>
            <UnloadingPhase />
          </Slide>

          <Slide>
            <FastingPhase />
          </Slide>

          <Slide>
            <LoadingPhase />
          </Slide>

          <Slide>
            <UsefulTipps />
          </Slide>
          <Spacing />
        </SlideHolder>
      </SectionSlider>
    </Container>
  );
}
