import tw, { styled } from 'twin.macro';
import SectionTitle from '../../components/section-title';

const TopSectionContainer = styled.div`
  min-height: 400px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    border
    border-gray-300
  `};
`;

export function TopSection() {
  return (
    <TopSectionContainer id="home">
      <SectionTitle text="top"></SectionTitle>
    </TopSectionContainer>
  );
}
