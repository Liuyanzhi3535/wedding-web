import tw, { styled } from 'twin.macro';
import CountDownTimer from '../../components/count-down-timer';
import SectionTitle from '../../components/section-title';
import ParkingInfo from '../../components/parking-info';
import Remind from '../../components/remind';

const WeddingContainer = styled.div`
  /* min-height: 400px; */
  ${tw`
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
    gap-6
    m-4
  `}
`;

const WedddingInfo = styled.div`
  ${tw`
    h-36
    w-48
    sm:h-48
    sm:w-64
    md:h-72
    md:w-96
    bg-gray-200
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
        <WedddingInfo></WedddingInfo>
        <WedddingInfo></WedddingInfo>
      </WeddingInfoContainer>
      <CountDownTimer></CountDownTimer>
      <ParkingInfo></ParkingInfo>
      <Remind></Remind>
    </WeddingContainer>
  );
}
