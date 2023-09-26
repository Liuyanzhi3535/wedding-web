import tw, { styled } from 'twin.macro';

const TopSectionContainer = styled.div`
  ${tw`
    // overflow-hidden
    relative
    top-[-40px]
    w-full
  `};
`;

const Ribbons = styled.div`
  ${tw`
    absolute
    lg:h-[320px]
    lg:w-[480px]
    lg:top-[-40px]
    lg:right-[-80px]
    h-[180px]
    w-[240px]
    top-[1px]
    right-[-80px]
    bg-ribbons
    bg-no-repeat
    bg-contain
  `}
`;

const Pigeon = styled.div`
  ${tw`
    absolute
    lg:h-[150px]
    lg:w-[240px]
    lg:top-[120px]
    lg:right-[300px]
    h-[56px]
    w-[80px]
    top-[240px]
    right-1/4
    bg-pigeon
    bg-no-repeat
    bg-contain
  `}
`;

const GressRight = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-gress-right
    w-[144px]
    h-[80px]
    right-[-64px]
    bottom-[208px]
    z-0
  `}
`;

const CloudLeft = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-cloud-left
    w-[144px]
    h-[80px]
    left-[-40px]
    top-[80px]
    z-0
  `}
`;

const CloudRight = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-cloud-right
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
    xl:top-[120px]
    xl:h-[500px]
    lg:top-[120px]
    lg:h-[300px]
    top-[96px]
    h-[150px]
    
  `}
`;

const MarriedTitle = styled.div`
  ${tw`
    bg-no-repeat
    bg-contain
    bg-married
    bg-bottom
    xl:w-[800px]
    xl:h-[360px]
    lg:m-[-40px]
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
  ${tw`
    bg-no-repeat
    bg-contain
    bg-zhi
    bg-bottom
    xl:w-80
    xl:h-44
    lg:w-48
    lg:h-36
    w-24
    h-16
  `}
`;

const Ching = styled.div`
  ${tw`
    bg-no-repeat
    bg-contain
    bg-ching
    bg-bottom
    xl:w-96
    xl:h-44
    lg:w-48
    lg:h-36
    w-28
    h-16
  `}
`;

const BowTie = styled.div`
  ${tw`
    bg-no-repeat
    bg-contain
    bg-bow-tie
    bg-bottom
    xl:w-48
    xl:h-44
    lg:w-36
    lg:h-32
    w-16
    h-16
  `}
`;

const Gress = styled.div`
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-bottom
    w-full
    right-0.5
    z-20
    top-[144px]
    h-[296px]
  `}
`;

const House = styled.div`
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-house
    md:w-full
    md:h-[900px]
    w-[640px]
    h-[296px]
    right-0.5
    z-20
  `}
`;

const Couple = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-couple
    md:w-[420px]
    md:h-[420px]
    md:left-[20%]
    md:top-[360px]
    w-[200px]
    h-[200px]
    left-[40px]
    bottom-[160px]
    z-30
  `}
`;

const Tree = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-tree
    w-[128px]
    h-[160px]
    left-[0px]
    bottom-[192px]
    z-10
  `}
`;

const Bike = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-bike
    w-[144px]
    h-[144px]
    right-[5%]
    bottom-[152px]
    z-40
  `}
`;

const GressLeft = styled.div`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-bottom
    bg-gress-left
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
        <GressRight />
        <House>
          <Couple />
        </House>
        <GressLeft />
      </Gress>
    </TopSectionContainer>
  );
}
