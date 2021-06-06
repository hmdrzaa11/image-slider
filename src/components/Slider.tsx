import styled from "styled-components";
import { motion } from "framer-motion";

interface SliderProps {
  imageUrl: string;
  direction: string;
}

const sliderVariants = {
  hiddenRight: {
    opacity: 0,
    x: "200px",
  },

  hiddenLeft: {
    opacity: 0,
    x: "-200px",
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      type: "spring",
      damping: 12,
    },
  },
  exitLeft: {
    x: "-300px",
    transition: {
      duration: 1,
      type: "spring",
      mas: 0.5,
    },
  },
  exitRight: {
    x: "300px",
    transition: {
      duration: 1,
      type: "spring",
      mas: 0.5,
    },
  },
};

const StyledSlider = styled(motion.div)`
  width: 70%;
  height: 80vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 2px 5px 13px 5px rgba(0, 0, 0, 0.23);
`;

export const Slider: React.FC<SliderProps> = ({ imageUrl, direction }) => {
  return (
    <StyledSlider
      variants={sliderVariants}
      initial={direction === "left" ? "hiddenRight" : "hiddenLeft"}
      animate="show"
      exit={direction === "left" ? "exitLeft" : "exitRight"}
    >
      <Image src={imageUrl} alt="image slider" />
    </StyledSlider>
  );
};
