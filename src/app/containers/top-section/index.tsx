import tw, { styled } from "twin.macro";

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
    backdrop-brightness-95
  `};
`;

export function TopSection() {
  return (
    <TopSectionContainer id="home">
      top
    </TopSectionContainer>
  );
}
