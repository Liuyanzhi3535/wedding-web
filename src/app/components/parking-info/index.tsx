import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';

const Empty = styled.div`
  ${tw`
    h-72
    w-96
    sm:h-48
    sm:w-64
    md:h-72
    md:w-96
    bg-gray-200
  `}
`;

function ParkingInfo() {
  return (
    <>
      <SubTitle text="停車資訊"></SubTitle>
      <Empty></Empty>
    </>
  );
}

export default ParkingInfo;
