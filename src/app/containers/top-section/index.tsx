import tw, { styled } from 'twin.macro';
import SectionTitle from '../../components/section-title';

const TopSectionContainer = styled.div`
  min-height: 400px;
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
    border
    border-gray-300
    bg-[url('https://dummyimage.com/600x400/eee/fff&text=test+bakground')]
    bg-no-repeat
    bg-contain
    bg-center
  `};
`;

const Title = styled.div`
  ${tw`
    inline-block
    h-[200px]
    w-[500px]
    bg-gray-100
  `}
`
const Bike = styled.div`
  ${tw`
    inline-block
    h-[80px]
    w-[120px]
    bg-gray-100
  `}
`



export function TopSection() {
  return (
    <TopSectionContainer id="home">
      <SectionTitle text="top"></SectionTitle>
      <Title>Zhi & Ching</Title>
      <Bike></Bike>
    </TopSectionContainer>
  );
}
