import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';
import lineRight from '../../../assets/images/R_LINE@3x.webp';
import gress from '../../../assets/images/deco1@3x.webp';
import cheers from '../../../assets/images/酒@3x.webp';
import socks from '../../../assets/images/襪子@3x.webp';
import phone from '../../../assets/images/手機@3x.webp';
// import { useMediaQuery } from 'react-responsive';
// import { SCREENS } from '../../../../responsive';

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

const Account = styled.div`
  ${tw`
    relative
    p-2
    m-2
    rounded
    bg-[#d3c79465]
    cursor-pointer
  `}
`;

// const CopyBtn = styled.div`
//   ${tw`
//     md:absolute
//     md:top-1/2
//     md:right-4
//     md:px-4
//     md:py-1
//     md:text-sm
//     md:text-white
//     md:font-semibold
//     md:rounded-full
//     md:border
//     md:z-40
//     md:cursor-pointer
//     md:bg-[#d3c794]
//     md:hover:bg-[#d3c79466]
//     md:block
//     md:-translate-y-1/2
//     hidden
//   `}
// `;

function Remind() {
  // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const accountInfos = [
    {
      bank: '聯邦銀行 803',
      account: '888-50-3100816',
    },
    {
      bank: '中國信託 822',
      account: '0000-3365-4041-5227',
    },
    {
      bank: '台新銀行 812',
      account: '2888-10-0722773-9',
    },
  ];

  const accoutInfos = accountInfos.map(
    (acc) => (
      <Account
        key={acc.account}
        onClick={() => {
          navigator.clipboard.writeText(acc.account.split('-').join(''));
          alert('複製成功');
        }}
      >
        <div>{acc.bank}</div>
        <div>{acc.account}</div>
      </Account>
    )
    // isMobile ? (
    //   <Account key={acc.account} onClick={() => navigator.clipboard.writeText(acc.account)}>
    //     <div>{acc.bank}</div>
    //     <div>{acc.account}</div>
    //   </Account>
    // ) : (
    //   <Account key={acc.account}>
    //     <div>{acc.bank}</div>
    //     <div>{acc.account}</div>
    //     <CopyBtn onClick={() => navigator.clipboard.writeText(acc.account)}>
    //       複製
    //     </CopyBtn>
    //   </Account>
    // )
  );

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
        <h3 className="text-content-green font-bold mb-2 sm:text-lg">
          溫馨提醒
        </h3>
        <div className="p-4 text-[#383838] text-sm sm:text-base tracking-wider break-words">
          <p>場地為市定古蹟，入席餐廳需要脫鞋並穿著襪子！</p>
          <Line />
          <span>禮金採現場掃條碼轉帳，請不必額外準備一次性紅包袋</span>
          <br />
          <br />
          <div>如有手續費歡迎自行扣掉</div>
          <div>
            記得<span className="text-[#ad523b]">備註/說明欄位留下名字！</span>
          </div>
          <div>{accoutInfos}</div>
          <div className="text-xs text-gray-500">* 點擊帳號可直接複製</div>
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
