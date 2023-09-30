import tw, { styled } from 'twin.macro';
// Import Swiper React components
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import SectionTitle from '../../components/section-title';
import './gallery.css';
SwiperCore.use([Pagination]);

const GalleryContainer = styled.div`
  min-height: 400px;
  ${tw`
    bg-bottom-bg
    bg-cover
    bg-no-repeat
    p-6
    pb-12
    w-full
    max-w-screen-2xl
    flex
    flex-col
    justify-center
    items-center
  `};
`;

const CarouselContainer = styled.div`
  height: 350px;
  ${tw`
    w-full
    px-8
  `};
`;

export function Gallery() {
  const [swiper, setSwiper] = useState({} as SwiperCore);

  return (
    <GalleryContainer id="gallery">
      <SectionTitle
        titleImg={tw`bg-gallery`}
        hasdecoration={true}
      ></SectionTitle>
      <CarouselContainer>
        <div className="wrapper">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            onActiveIndexChange={(swiper) => {
              console.log('active index is', swiper.activeIndex);
            }}
          >
            <SwiperSlide>
              <div className="slide bg-001"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-003"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-030"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-045"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-065"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-087"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-094"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-120"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-123"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-131"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-148"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-183"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-219"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-239"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide bg-254"></div>
            </SwiperSlide>
          </Swiper>
          <div className="button-wrapper w-full flex justify-center mt-2">
          <button
            className="arrow left"
            onClick={() => {
              swiper.slidePrev();
            }}
          ></button>
          <button
            className="arrow right"
            onClick={() => {
              swiper.slideNext();
            }}
          ></button>
          </div>
        </div>
      </CarouselContainer>
    </GalleryContainer>
  );
}
