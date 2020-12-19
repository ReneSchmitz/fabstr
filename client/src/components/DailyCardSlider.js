import styled from "styled-components/macro";

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
        <SlideHolder></SlideHolder>
      </SectionSlider>
    </Container>
  );
}
