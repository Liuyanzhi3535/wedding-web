import tw, { styled } from 'twin.macro';
import ribbons from '../../../assets/images/彩帶@3x.webp';
import pigeon from '../../../assets/images/鴿子@3x.webp';
import married from '../../../assets/images/WERMARRIED@3x.webp';
import zhi from '../../../assets/images/彥治@3x.webp';
import ching from '../../../assets/images/陳淨@3x.webp';
import bowTie from '../../../assets/images/蝴蝶結@3x.webp';
import couple from '../../../assets/images/人@3x.webp';
import house from '../../../assets/images/house@3x.webp';
import tree from '../../../assets/images/樹@3x.webp';
import bike from '../../../assets/images/腳踏車@3x.webp';
import gressLeft from '../../../assets/images/L草叢@3x.webp';
import gressRight from '../../../assets/images/R草叢@3x.webp';
import trunk from '../../../assets/images/樹幹@3x.webp';
import cloudLeft from '../../../assets/images/L@3x.webp';
import cloudRight from '../../../assets/images/R@3x.webp';
import mountain from '../../../assets/images/山@3x.webp';

const TopSectionContainer = styled.div`
  ${tw`
    // overflow-hidden
    relative
    top-[-40px]

    w-full
  `};
`;

const Ribbons = styled.div`
  background-image: url(${ribbons});
  ${tw`
    absolute

    xl:h-[320px]
    xl:w-[480px]
    xl:top-[-40px]
    xl:right-[-80px]

    md:h-[240px]
    md:w-[320px]
    md:top-[1px]
    md:right-[-80px]

    h-[180px]
    w-[240px]
    top-[1px]
    right-[-80px]
    bg-no-repeat
    bg-contain
  `}
`;

const Pigeon = styled.div`
  background-image: url(${pigeon});
  ${tw`
    absolute


    2xl:right-[20%]

    xl:h-[104px]
    xl:w-[160px]
    xl:top-[140px]

    md:h-[80px]
    md:w-[144px]
    md:top-[140px]
    md:right-[15%]

    h-[56px]
    w-[80px]
    top-[240px]
    right-1/4
    bg-no-repeat
    bg-contain
  `}
`;

const GressRight = styled.div`
  background-image: url(${gressRight});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-[240px]
    2xl:h-[180px]
    2xl:bottom-[240px]

    lg:w-[180px]
    lg:h-[140px]
    lg:bottom-[180px]

    md:bottom-[160px]

    sm:w-[144px]
    sm:h-[80px]
    sm:right-[-24px]
    sm:bottom-[88px]
    sm:z-40

    w-[144px]
    h-[80px]
    right-[-64px]
    bottom-[208px]
    z-0
  `}
`;

const CloudLeft = styled.div`
  background-image: url(${cloudLeft});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-[180px]
    2xl:h-[120px]
    2xl:left-[20%]

    md:left-[15%]

    w-[144px]
    h-[80px]
    left-[-40px]
    top-[80px]
    z-0
  `}
`;

const CloudRight = styled.div`
  background-image: url(${cloudRight});

  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-[180px]
    2xl:h-[120px]
    2xl:right-[10%]

    md:right-[5%]

    w-[112px]
    h-[56px]
    right-[-40px]
    top-[224px]
    z-0
  `}
`;

const Banner = styled.div`
  ${tw`
    relative
    w-full
    flex
    flex-col
    items-center

    2xl:top-[80px]
    2xl:h-[240px]

    xl:top-[120px]
    xl:h-[240px]

    lg:top-[140px]
    lg:h-[180px]

    top-[96px]
    h-[150px]
    
  `}
`;

const MarriedTitle = styled.div`
  background-image: url(${married});
  ${tw`
    bg-no-repeat
    bg-contain
    bg-bottom
    xl:w-[800px]
    xl:h-[360px]

    lg:m-[-20px]
    lg:w-[560px]
    lg:h-[240px]

    m-[-20px]
    w-[280px]
    h-[120px]
  `}
`;

const Names = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const Zhi = styled.div`
  background-image: url(${zhi});
  ${tw`
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-40
    2xl:h-28

    lg:w-36
    lg:h-24

    w-24
    h-16
  `}
`;

const Ching = styled.div`
  background-image: url(${ching});
  ${tw`
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-40
    2xl:h-28

    lg:w-36
    lg:h-24

    w-28
    h-16
  `}
`;

const BowTie = styled.div`
  background-image: url(${bowTie});
  ${tw`
    bg-no-repeat
    bg-contain
    bg-bottom

    lg:w-28
    lg:h-20

    w-16
    h-16
  `}
`;

const Gress = styled.div`
  ${tw`
    relative
    w-[102%]
    right-0.5
    z-20
    3xl:h-[800px]
    2xl:h-[700px]
    xl:h-[660px]
    lg:h-[480px]
    md:h-[400px]
    sm:h-[312px]
    top-[144px]
    h-[296px]
  `}
`;

const House = styled.div`
  background-image: url(${house});
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-bottom

    xl:h-[680px]
    xl:bg-cover

    lg:h-[520px]

    md:w-full
    md:h-[360px]
    md:bg-cover
    md:bg-top

    sm:h-[360px]
    sm:w-full
    sm:bg-cover

    w-[640px]
    h-[296px]
    right-0.5
    z-30
  `}
`;

const Couple = styled.div`
  background-image: url(${couple});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    xl:w-[360px]
    xl:h-[360px]
    xl:left-[15%]
    xl:bottom-[280px]

    lg:bottom-[240px]

    md:w-[280px]
    md:h-[280px]
    md:left-[10%]
    md:bottom-[160px]

    w-[200px]
    h-[200px]
    left-[40px]
    bottom-[160px]
    z-[500]
  `}
`;

const Tree = styled.div`
  background-image: url(${tree});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    3xl:w-[360px]
    3xl:h-[420px]
    3xl:bottom-[520px]

    2xl:w-[300px]
    2xl:h-[360px]
    2xl:bottom-[480px]

    xl:w-[300px]
    xl:h-[360px]
    xl:bottom-[460px]

    lg:bottom-[320px]

    md:w-[192px]
    md:h-[240px]
    md:left-[0px]
    md:bottom-[270px]

    w-[128px]
    h-[160px]
    left-[0px]
    bottom-[192px]
    z-10
  `}
`;
const Mountain = styled.div`
  background-image: url(${mountain});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    3xl:w-[700px]
    3xl:h-[600px]
    3xl:bottom-[400px]

    2xl:w-[600px]
    2xl:h-[460px]
    2xl:bottom-[360px]

    xl:w-[500px]
    xl:h-[360px]
    xl:bottom-[380px]

    lg:w-[440px]
    lg:h-[220px]
    lg:bottom-[260px]

    md:w-[340px]
    md:h-[192px]
    md:bottom-[220px]

    sm:inline-block

    w-[200px]
    h-[128px]
    right-[-16px]
    bottom-[172px]
    hidden

    z-10
  `}
`;

const Bike = styled.div`
  background-image: url(${bike});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    3xl:w-[360px]
    3xl:h-[360px]
    3xl:right-[480px]
    3xl:bottom-[480px]

    2xl:w-[280px]
    2xl:h-[280px]
    2xl:right-[400px]
    2xl:bottom-[460px]

    xl:w-[280px]
    xl:h-[280px]
    xl:right-[400px]
    xl:bottom-[420px]

    lg:w-[240px]
    lg:h-[240px]
    lg:right-[20%]
    lg:bottom-[300px]

    md:w-[200px]
    md:h-[200px]
    md:right-[15%]
    md:bottom-[240px]

    sm:w-[160px]
    sm:h-[160px]
    sm:right-[10%]
    sm:bottom-[135px]

    w-[144px]
    h-[144px]
    right-[5%]
    bottom-[152px]
    z-40
  `}
`;

const Trunk = styled.div`
  background-image: url(${trunk});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    xl:w-[200px]
    xl:h-[200px]
    xl:bottom-[300px]
    xl:left-[480px]


    lg:w-[180px]
    lg:h-[180px]
    lg:bottom-[260px]
    lg:left-[280px]

    md:w-[160px]
    md:h-[160px]
    md:bottom-[180px]
    md:left-[240px]

    sm:bottom-[160px]
    sm:inline-block

    w-[112px]
    h-[112px]
    right-[50%]
    translate-x-1/4
    hidden
    bottom-[152px]
    z-30
  `}
`;

const GressLeft = styled.div`
  background-image: url(${gressLeft});
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom

    2xl:w-[240px]
    2xl:h-[180px]
    2xl:bottom-[240px]

    lg:w-[180px]
    lg:h-[140px]
    lg:bottom-[180px]

    md:bottom-[160px]

    w-[144px]
    h-[80px]
    left-[-24px]
    bottom-[88px]

    z-40
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer id="home">
      <Ribbons />
      <Pigeon />
      <CloudLeft />
      <CloudRight />
      <Banner>
        <MarriedTitle></MarriedTitle>
        <Names>
          <Zhi />
          <BowTie />
          <Ching />
        </Names>
      </Banner>
      <Gress>
        <Bike />
        <Tree />
        <Mountain />
        <GressRight />
        <House>
          <Trunk />
          <Couple />
        </House>
        <GressLeft />
      </Gress>
    </TopSectionContainer>
  );
}
