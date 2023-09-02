import tw, { styled } from 'twin.macro';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import './gallery.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GalleryContainer = styled.div`
  min-height: 400px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    backdrop-brightness-0
  `};
`;

const CarouselContainer = styled.div`
  height: 350px;
  ${tw`
    w-full
    p-4
  `};
`;

export function Gallery() {
  return (
    <GalleryContainer>
      <CarouselContainer>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="photo-swiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </CarouselContainer>
    </GalleryContainer>
  );
}
