import { useState } from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { dataSliders } from '../../dataFake';
import Slide from '../Slide/Slide';

const SliderWrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styledComponents.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  color: var(--blue);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === 'left' && '10px')};
  right: ${(props) => (props.direction === 'right' && '10px')};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const SliderContainer = styledComponents.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(-${(props) => props.slideIndex * 100}vw);
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderWrapper>
      <Arrow direction="left" onClick={() => handleArrowClick('left')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      <SliderContainer slideIndex={slideIndex}>
        {dataSliders.map((slideData) => (
          <Slide key={slideData.idSlide} contentSlide={slideData} />
        ))}
      </SliderContainer>
      <Arrow direction="right" onClick={() => handleArrowClick('right')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </SliderWrapper>
  );
}

export default Slider;
