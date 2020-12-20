import styled from "styled-components/macro";
import Preparation from "./DailyCardPreparation";
import UnloadingPhase from "./DailyCardUnloading";
import FastingPhase from "./DailyCardFasting";
import LoadingPhase from "./DailyCardLoading";
import UsefulTipps from "./DailyCardUsefulTipps";

const Container = styled.div``;

const SectionSlider = styled.section`
  display: grid;
  grid-column-gap: 1.5em;
`;

const SlideHolder = styled.div`
  display: grid;
  overflow: auto;
  padding: 0 5% 3em;
  grid-template-columns: 2fr auto;
  grid-column-gap: 1.5em;
`;

const Slide = styled.div``;

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
        </SlideHolder>
      </SectionSlider>
    </Container>
  );
}
