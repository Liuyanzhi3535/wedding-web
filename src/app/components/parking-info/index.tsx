import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';

const Empty = styled.div`
  ${tw`
    h-[240px]
    w-[400px]
    sm:h-[480px]
    sm:w-[800px]
    bg-gray-200
  `}
`;

const LocationText = styled.a`
  ${tw`
    border-2
  `}  
`

function ParkingInfo() {
  return (
    <>
      <SubTitle text="停車資訊"></SubTitle>
      <LocationText target='_blank' href='https://maps.app.goo.gl/JDQy4Y3tbZ7BLdbj8'>竹市東區區公所停車場</LocationText>
      <LocationText target='_blank' href='https://maps.app.goo.gl/TjvvcY6mcAxT6P6T9'>東大路橋下中華停車場</LocationText>
      <LocationText target='_blank' href='https://maps.app.goo.gl/gPfuAuvPnVaU6bMs9'>停車場</LocationText>



      <Empty></Empty>
    </>
  );
}

export default ParkingInfo;
