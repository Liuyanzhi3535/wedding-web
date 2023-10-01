import tw, { styled } from 'twin.macro';
import CountDownTimer from '../../components/count-down-timer';
import SectionTitle from '../../components/section-title';
import ParkingInfo from '../../components/parking-info';
import Remind from '../../components/remind';
import { css } from 'styled-components';
import trunk from '../../../assets/images/樹幹@3x.webp';
import wedding from '../../../assets/images/WEDDING@3x.webp';
import when from '../../../assets/images/when@3x.webp';
import where from '../../../assets/images/where@3x.webp';
import dish from '../../../assets/images/餐盤@3x.webp';
import flower2 from '../../../assets/images/deco2@3x.webp';
import gress2 from '../../../assets/images/deco3@3x.webp';

const WeddingContainer = styled.div`
  /* min-height: 400px; */
  ${tw`
    relative
    w-full
    max-w-screen-2xl
    flex
    flex-col
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const WeddingInfoContainer = styled.div`
  ${tw`
    flex
    flex-col

    md:w-[660px]
    md:gap-8

    sm:flex-row

    gap-16
    m-10
  `}
`;

const WedddingInfo = styled.div<{ image: string }>`
  ${tw`
    relative
    
    md:w-96

    sm:h-48
    sm:w-64

    h-32
    w-52
    bg-white
    flex
    flex-col
    justify-center
    items-center
    gap-2
  `}
  ${({ image }) =>
    css`    
        &:before {
          content: '';
          background-image: url(${image});
          ${tw`
            inline-block
            absolute
            left-1/2
            translate-x-[-50%]
            bg-no-repeat
            bg-contain
            bg-center
            
            md:top-[-48px]
            md:w-20
            md:h-24

            top-[-36px]
            w-14
            h-16
          `}
      `}
`;

const CardText = styled.p`
  ${tw`
    md:text-base

    text-xs
    tracking-wider
  `}
`;

const Trunk = styled.div`
  background-image: url(${trunk});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain

    sm:h-32
    sm:w-48
    sm:top-[132px]
    sm:left-[-80px]

    h-20
    w-32
    top-[72px]
    left-[-44px]
  `}
`;

const Flower2 = styled.div`
  background-image: url(${flower2});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain

    sm:h-32
    sm:w-32
    sm:top-[560px]
    sm:right-[10%]

    h-16
    w-16
    top-[224px]
    right-6
  `}
`;

const Gress2 = styled.div`
  background-image: url(${gress2});

  ${tw`
    absolute
    bg-no-repeat
    bg-contain

    md:top-[960px]
    md:left-[10%]

    sm:h-48
    sm:w-48
    sm:top-[800px]

    h-24
    w-24
    top-[432px]
    left-4
  `}
`;

const Dish = styled.div`
  background-image: url(${dish});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-center

    sm:h-24
    sm:w-44
    sm:top-16
    sm:left-[50%]
    sm:inline-block
    sm:-translate-x-[92px]

    hidden
    z-30
  `}
`;

export function Wedding() {
  return (
    <WeddingContainer id="wedding">
      <SectionTitle titleImg={wedding} hasdecoration={true}></SectionTitle>
      <WeddingInfoContainer>
        <WedddingInfo image={when}>
          <CardText className="text-[#383838]">2023/10/21 Sat.</CardText>
          <CardText className="text-[#383838]">AM 11:30</CardText>
          <CardText className="text-content-green">準時開席</CardText>
          <Trunk />
        </WedddingInfo>
        <Dish />
        <WedddingInfo image={where}>
          <CardText className="text-[#383838]">辛志平校長故居</CardText>
          <a href='https://maps.app.goo.gl/WGSpy2Z7nFVxT3b59' target='_blank' className="flex gap-1 items-center">
            <svg
              className="fill-orange-400 w-2 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <CardText className="text-content-green">
              新竹市東區東門街 32 號
            </CardText>
          </a>
        </WedddingInfo>
      </WeddingInfoContainer>
      <Flower2 />
      <Gress2 />
      <CountDownTimer></CountDownTimer>
      <ParkingInfo></ParkingInfo>
      <Remind></Remind>
    </WeddingContainer>
  );
}
