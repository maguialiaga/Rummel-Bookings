import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/images/slide-1.png";
import img2 from "../assets/images/slide-2.png";

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const TextChanger = ({ currentSlide, nextSlide }) => {};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const TextOverlay = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  position: absolute;
  top: 95%;
  left: 7%;
  transform: translate(-20%, -50%);
  padding: 10px;
  justify-content: left;
  align-items: center;
  text-align: left;
  transition: transform 2s ease-in-out;
  @media (max-width: 1440px) {
    top: 95%;
    left: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translate(-50%, -50%);
  }
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ImageSlider = ({
  images = [img1, img2],
  texts = [
    `Djolee, Gespona - "Malabares"`,
    `Agustin Giri, Djolee - "Caminos de Fuego" ft. Apo Lucia`,
  ],
  autoPlay = true,
  autoPlayTime = 4000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        >
          {index === currentSlide && (
            <TextOverlay style={{ color: "white" }}>
              {texts[currentSlide]}
            </TextOverlay>
          )}
        </Slide>
      ))}

      <Gradient />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ImageSlider;
