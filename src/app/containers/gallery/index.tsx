import tw, { styled } from 'twin.macro';
// Import Swiper React components
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import background_3 from '../../../assets/images/BG_3.webp';
import gallery from '../../../assets/images/GALLERY@3x.webp';
import p001 from '../../../assets/photo/0825-0001.jpg';
import p003 from '../../../assets/photo/0825-0003.jpg';
import p030 from '../../../assets/photo/0825-0030.jpg';
import p045 from '../../../assets/photo/0825-0045.jpg';
import p065 from '../../../assets/photo/0825-0065.jpg';
import p087 from '../../../assets/photo/0825-0087.jpg';
import p094 from '../../../assets/photo/0825-0094.jpg';
import p120 from '../../../assets/photo/0825-0120.jpg';
import p123 from '../../../assets/photo/0825-0123.jpg';
import p131 from '../../../assets/photo/0825-0131.jpg';
import p148 from '../../../assets/photo/0825-0148.jpg';
import p183 from '../../../assets/photo/0825-0183.jpg';
import p219 from '../../../assets/photo/0825-0219.jpg';
import p239 from '../../../assets/photo/0825-0239.jpg';
import p254 from '../../../assets/photo/0825-0254.jpg';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import SectionTitle from '../../components/section-title';
import './gallery.css';
SwiperCore.use([Pagination]);

const GalleryContainer = styled.div`
  background-image: url(${background_3});
  min-height: 400px;
  ${tw`
    bg-cover
    bg-no-repeat
    p-6
    pb-12
    w-full
    flex
    flex-col
    justify-center
    items-center
  `};
`;

const CarouselContainer = styled.div`
  ${tw`
    w-full
    px-8
  `};
`;

export function Gallery() {
  const [swiper, setSwiper] = useState({} as SwiperCore);

  return (
    <GalleryContainer id="gallery">
      <SectionTitle titleImg={gallery} hasdecoration={true}></SectionTitle>
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
              <div
                className="slide"
                style={{ backgroundImage: `url(${p001})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p003})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p030})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p045})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p065})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p087})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p094})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p120})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p123})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p131})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p148})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p183})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p219})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p239})` }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide"
                style={{ backgroundImage: `url(${p254})` }}
              ></div>
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
