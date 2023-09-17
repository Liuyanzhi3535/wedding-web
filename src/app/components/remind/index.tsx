import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';

const RemindContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;

const DressCode = styled.div`
  ${tw`
    flex
    gap-4
    my-4
  `}
`;

const Empty = styled.div`
  ${tw`
    h-16
    w-16
    md:h-24
    md:w-24
    bg-gray-200
  `}
`;

const RemindText = styled.div`
  ${tw`
    w-full
    text-center
    bg-gray-200
    m-4
    p-4
    rounded	
    relative
  `}
  &:before {
    content: '';
    ${tw`
      h-0
      w-0
      border-solid	
      border-x-[15px]
      border-x-transparent
      border-b-[15px]
      border-b-gray-200
      absolute
      top-[-15px]
      left-1/2
      -translate-x-1/2
    `}
  }
`;

const Cheers = styled.div`
  ${tw`
    h-24
    w-24
    m-4
    bg-gray-200
  `}
`;

function Remind() {
  return (
    <RemindContainer>
      <SubTitle text="Dress Code"></SubTitle>
      <DressCode>
        <Empty></Empty>
        <Empty></Empty>
        <Empty></Empty>
        <Empty></Empty>
      </DressCode>
      <RemindText>
        <h3>溫馨提醒</h3>
        <p>
          入席餐廳需要脫鞋.並穿著襪子！
          <br />
          當日也備有許多酒款，大家理性飲酒，與您一起分享我們的喜悅
        </p>
      </RemindText>
      <Cheers></Cheers>
    </RemindContainer>
  );
}

export default Remind;
