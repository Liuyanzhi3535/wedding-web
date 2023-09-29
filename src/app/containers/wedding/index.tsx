import tw, { TwStyle, styled } from 'twin.macro';
import CountDownTimer from '../../components/count-down-timer';
import SectionTitle from '../../components/section-title';
import ParkingInfo from '../../components/parking-info';
import Remind from '../../components/remind';
import { css } from 'styled-components';

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
    sm:flex-row
    gap-16
    m-10
  `}
`;

const WedddingInfo = styled.div<{ image: TwStyle }>`
  ${tw`
    relative
    sm:h-48
    sm:w-64
    md:h-72
    md:w-96
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
          ${image}
          ${tw`
            inline-block
            absolute
            top-[-36px]
            left-1/2
            translate-x-[-50%]
            bg-no-repeat
            bg-contain
            bg-center
            w-14
            h-16
          `}
      `}
`;

const CardText = styled.p`
  ${tw`
    text-xs
    tracking-wider
  `}
`;

const Trunk = styled.div`
  ${tw`
    absolute
    h-20
    w-32
    top-[72px]
    left-[-44px]
    bg-trunk
    bg-no-repeat
    bg-contain
  `}
`;

const Flower2 = styled.div`
  ${tw`
    absolute
    h-16
    w-16
    top-[224px]
    right-6
    bg-flower2
    bg-no-repeat
    bg-contain
  `}
`;

const Gress2 = styled.div`
  ${tw`
    absolute
    h-24
    w-24
    top-[432px]
    left-4
    bg-gress2
    bg-no-repeat
    bg-contain
  `}
`;

export function Wedding() {
  return (
    <WeddingContainer id="wedding">
      <SectionTitle
        titleImg={tw`bg-wedding`}
        hasdecoration={true}
      ></SectionTitle>
      <WeddingInfoContainer>
        <WedddingInfo image={tw`bg-when`}>
          <CardText className="text-[#383838]">2023/10/21 Sat.</CardText>
          <CardText className="text-[#383838]">PM 12:00</CardText>
          <CardText className="text-content-green">準時開席</CardText>
          <Trunk />
        </WedddingInfo>
        <WedddingInfo image={tw`bg-where`}>
          <CardText className="text-[#383838]">辛志平校長故居</CardText>
          <div className="flex gap-1 items-center">
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
          </div>
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
