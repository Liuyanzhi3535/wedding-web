import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import NavItems from './nav-items';
import { SCREENS } from '../../../../responsive';
import { useMediaQuery } from 'react-responsive';

const NavBarContainer = styled.div<{ isMobile: boolean }>`
  min-height: 56px;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  flex-row
  items-center
  lg:pl-12
  lg:pr-12
  justify-center
  `}
  ${({ isMobile }) =>
    !isMobile &&
    css`
      ${tw`
      sticky
      top-0
      [background-color: #ddd]
      z-10
      `};
    `};
`;

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <NavBarContainer isMobile={isMobile}>
      {/* logo */}
      <NavItems />
    </NavBarContainer>
  );
}

export default NavBar;
