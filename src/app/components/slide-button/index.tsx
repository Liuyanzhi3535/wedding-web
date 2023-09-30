import { useSwiper } from 'swiper/react';
import './button.css';

interface ButtonProps {
  type: 'left' | 'right';
}

export const SwiperNavButtons = (props: ButtonProps) => {
  const swiper = useSwiper();

  const btn =
    props.type === 'left' ? (
      <span className="arrow left" onClick={() => swiper.slidePrev()}></span>
    ) : (
      <span className="arrow right" onClick={() => swiper.slideNext()}></span>
    );

  return <div className={"swiper-nav-btn " + props.type}>{btn}</div>;
};
