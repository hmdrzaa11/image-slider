import styled, { css } from "styled-components";
import { Image } from "../utils/dev-data";
import { Slider } from "./Slider";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: Image[];
}

const StyledImageSlider = styled.section`
  height: 100vh;
  padding-top: 3rem;
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

let ArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 5rem;
  user-select: none;
  cursor: pointer;
  font-size: 3rem;
`;
let ArrowRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 5rem;
  user-select: none;
  cursor: pointer;
  font-size: 3rem;
`;

const SliderDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Ball = styled.div<{ isActive: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 0.4rem;
  transition: all 0.2s ease;
  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: royalblue;
        width: 2rem;
        height: 2rem;
      `;
    }
  }}
`;

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  let [current, setCurrent] = useState(0);
  let [direction, setDirection] = useState("right");
  let goPrevious = () => {
    setDirection("left");
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent((preState) => preState - 1);
    }
  };
  let goNext = () => {
    setDirection("right");
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((preState) => preState + 1);
    }
  };

  let renderImage = () => {
    return images.map((image, index) => {
      if (current === index) {
        return (
          <AnimatePresence>
            <Slider imageUrl={image.url} direction={direction} />;
          </AnimatePresence>
        );
      } else {
        return null;
      }
    });
  };

  let renderDetailBalls = () => {
    return images.map((_, index) => (
      <Ball key={index} isActive={current === index} />
    ));
  };

  return (
    <StyledImageSlider>
      <SliderWrapper>
        {renderImage()}
        <ArrowLeft onClick={goPrevious} />
        <ArrowRight onClick={goNext} />
      </SliderWrapper>
      <SliderDetails>{renderDetailBalls()}</SliderDetails>
    </StyledImageSlider>
  );
};
