import tw, { styled } from 'twin.macro';
import SectionTitle from '../../components/section-title';
import ourStory from '../../../assets/images/OUR_STORY@3x.webp';
import flower from '../../../assets/images/花@3x.webp';
import gress from '../../../assets/images/deco1@3x.webp';

const OurStoryContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    px-3
    lg:px-12
    m-6
    relative
  `};
`;

const Deco = styled.div`
  ${tw`
    flex
    items-center
    h-16
  `}
`;

const Gress = styled.div`
  background-image: url(${gress});
  ${tw`
    bg-no-repeat
    bg-contain

    lg:left-[5%]

    md:absolute
    md:top-[10%]
    md:left-[0%]
    md:h-[240px]
    md:w-[240px]
    
    h-[120px]
    w-[120px]
  `}
`;

const Flower = styled.div`
  background-image: url(${flower});
  ${tw`
    bg-no-repeat
    bg-contain
    h-[64px]
    w-[120px]
  `}
`;

const Empty = styled.div`
  ${tw`
    md:absolute

    inline-block
    h-[120px]
    w-[120px]
  `}
`;

const Discription = styled.div`
  ${tw`
    lg:w-[600px]
    lg:text-lg

    md:w-[420px]
    
    sm:w-[300px]
    sm:text-base

    w-[240px]
    text-xs
    m-6
    inline-block
    text-content-green
    tracking-widest
    text-center
  `}
`;

export function OurStory() {
  return (
    <OurStoryContainer id="ourStory">
      <SectionTitle titleImg={ourStory}></SectionTitle>
      <Deco>
        <Gress />
        <Flower />
        <Empty />
      </Deco>
      <Discription>
        相識相戀&nbsp;&nbsp;轉瞬十年
        <br />
        成為情人&nbsp;&nbsp;成為最好的朋友和家人
        <br />
        此刻&nbsp;&nbsp;即將邁入新的階段
        <br />
        <br />
        敬邀沿路相伴的你們&nbsp;&nbsp;同享幸福與喜悅
        <br />
      </Discription>
    </OurStoryContainer>
  );
}
