import styled from "styled-components/macro";
import Preparation from "./DailyCardPreparation";
import UnloadingPhase from "./DailyCardUnloading";
import FastingPhase from "./DailyCardFasting";
import LoadingPhase from "./DailyCardLoading";
import UsefulTipps from "./DailyCardUsefulTipps";

const Container = styled.div``;
const SectionSlider = styled.section``;
const SliderRadio = styled.input``;

const SlideHolder = styled.div``;
const Slide = styled.label`
  div {
    z-index: 2;
    transform: scale(0.85);
  }
  .slider__item--3 {
    #slide-3:checked ~ .slider__holder & {
      transform: scale(1);
    }
  }
`;

const Navigation = styled.div``;

export default function Slider() {
  return (
    <Container>
      <SectionSlider>
        <div>
          <h1>React Slider</h1>
          <p>By using a documentation from medium.</p>
        </div>

        <SliderRadio type="radio" name="slider" id="slide-1" />
        <SliderRadio type="radio" name="slider" id="slide-2" />
        <SliderRadio type="radio" name="slider" id="slide-3" checked />
        <SliderRadio type="radio" name="slider" id="slide-4" />
        <SliderRadio type="radio" name="slider" id="slide-5" />

        <SlideHolder>
          <Slide htmlFor="slide-1" className="slider__item--1">
            <Preparation />
          </Slide>

          <Slide htmlFor="slide-2" className="slider__item--2">
            <UnloadingPhase />
          </Slide>

          <Slide htmlFor="slide-3" className="slider__item--3">
            <FastingPhase />
          </Slide>

          <Slide htmlFor="slide-4" className="slider__item--4">
            <LoadingPhase />
          </Slide>

          <Slide htmlFor="slide-5" className="slider__item--5">
            <UsefulTipps />
          </Slide>
        </SlideHolder>

        <Navigation>
          <label htmlFor="slide-1">Bullet 1</label>
          <label htmlFor="slide-2">Bullet 2</label>
          <label htmlFor="slide-3">Bullet 3</label>
          <label htmlFor="slide-4">Bullet 4</label>
          <label htmlFor="slide-5">Bullet 5</label>
        </Navigation>
      </SectionSlider>
    </Container>
  );
}
