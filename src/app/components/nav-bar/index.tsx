import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import NavItems from './nav-items';
import { SCREENS } from '../../../../responsive';
import { useMediaQuery } from 'react-responsive';

const NavBarContainer = styled.div<{ ismobile: number }>`
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
  ${({ismobile}) =>
    !ismobile
      ? css`
          ${tw`
      sticky
      top-0
      bg-gray-200
      z-10
      `};
        `
      : ``};
`;

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <NavBarContainer ismobile={+isMobile}>
      {/* logo */}
      <NavItems />
    </NavBarContainer>
  );
}

export default NavBar;
