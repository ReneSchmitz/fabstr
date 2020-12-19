import styled from "styled-components/macro";
import Preparation from "./DailyCardPreparation";
import UnloadingPhase from "./DailyCardUnloading";
import FastingPhase from "./DailyCardFasting";
import LoadingPhase from "./DailyCardLoading";
import UsefulTipps from "./DailyCardUsefulTipps";

const Container = styled.div``;
const SectionSlider = styled.section``;

const SlideHolder = styled.div``;

const SliderRadio = styled.input``;

export default function Slider() {
  return (
    <Container>
      <SectionSlider>
        <SliderRadio type="radio" name="slider" id="slide-1" />
        <SliderRadio type="radio" name="slider" id="slide-2" />
        <SliderRadio type="radio" name="slider" id="slide-3" checked />
        <SliderRadio type="radio" name="slider" id="slide-4" />
        <SliderRadio type="radio" name="slider" id="slide-5" />
        <SlideHolder>
          <label htmlFor="slide-1">
            <Preparation />
          </label>

          <label htmlFor="slide-2">
            <UnloadingPhase />
          </label>

          <label htmlFor="slide-3">
            <FastingPhase />
          </label>

          <label htmlFor="slide-4">
            <LoadingPhase />
          </label>

          <label htmlFor="slide-5">
            <UsefulTipps />
          </label>
        </SlideHolder>
      </SectionSlider>
    </Container>
  );
}
