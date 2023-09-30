import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';
import lineRight from '../../../assets/images/R_LINE@3x.webp';
import gress from '../../../assets/images/deco1@3x.webp';
import cheers from '../../../assets/images/酒@3x.webp';
import socks from '../../../assets/images/襪子@3x.webp';
import phone from '../../../assets/images/手機@3x.webp';

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
    mb-4
  `}
`;

const ColorImg = styled.div`
  ${tw`
    h-16
    w-16
    md:h-24
    md:w-24
  `}
`;

const RemindText = styled.div`
  ${tw`
    relative
    text-center
    bg-white
    m-4
    mx-6
    p-4
    rounded-2xl
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
      border-white
      absolute
      top-[-15px]
      left-1/2
      -translate-x-1/2
    `}
  }
`;

const Socks = styled.div`
  background-image: url(${socks});
  ${tw`
    absolute
    h-20
    w-32
    top-[-24px]
    right-[-64px]
    bg-no-repeat
    bg-contain
  `}
`;

const Phone = styled.div`
  background-image: url(${phone});
  ${tw`
    absolute
    h-20
    w-32
    top-[104px]
    left-[-32px]
    bg-no-repeat
    bg-contain
  `}
`;
const Line = styled.div`
  background-image: url(${lineRight});
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-center
    w-full
    h-12
  `}
`;

const Cheers = styled.div`
  background-image: url(${cheers});

  ${tw`
    bg-no-repeat
    bg-contain
    
    sm:h-48
    sm:w-48

    h-32
    w-32
    mb-8
  `}
`;

const Gress = styled.div`
  background-image: url(${gress});

  ${tw`
    absolute
    bg-no-repeat
    bg-contain

    sm:bottom-0.5
    sm:right-[10%]
    sm:h-52
    sm:w-52

    bottom-0.5
    right-0.5
    h-32
    w-32
  `}
`;

function Remind() {
  return (
    <RemindContainer>
      <SubTitle text="Dress Code"></SubTitle>
      <p className="text-[#383838] text-xs sm:text-lg tracking-wider m-4">
        請穿搭米色 / 奶茶色 / 大地色之服裝
      </p>
      <DressCode>
        <ColorImg
          className="bg-[#d3c794]"
          style={{ borderRadius: '51% 47% 49% 37% / 40% 34% 38% 36%' }}
        ></ColorImg>
        <ColorImg
          className="bg-[#cca885]"
          style={{ borderRadius: '50% 58% 51% 56% / 72% 45% 64% 37%' }}
        ></ColorImg>
        <ColorImg
          className="bg-[#9e753f]"
          style={{ borderRadius: '60% 44% 58% 36% / 51% 67% 49% 37%' }}
        ></ColorImg>
        <ColorImg
          className="bg-[#6f9f3b]"
          style={{ borderRadius: '51% 48% 39% 67% / 50% 54% 48% 36%' }}
        ></ColorImg>
      </DressCode>
      <RemindText>
        <h3 className="text-content-green font-bold mb-2 sm:text-lg">溫馨提醒</h3>
        <div className="p-4 text-[#383838] text-sm sm:text-base tracking-wider break-words">
          <span>場地為市定古蹟，入席餐廳需要脫鞋並穿著襪子！</span>
          <Line />
          <span>禮金採現場掃條碼電子支付，請不必額外準備一次性紅包袋</span>
        </div>
        <Socks />
        <Phone />
      </RemindText>
      <Cheers></Cheers>
      <Gress />
    </RemindContainer>
  );
}

export default Remind;
