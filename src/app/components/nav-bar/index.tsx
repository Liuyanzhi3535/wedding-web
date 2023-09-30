import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import NavItems from './nav-items';
import { SCREENS } from '../../../../responsive';
import { useMediaQuery } from 'react-responsive';
import topBar from '../../../assets/images/底@3x.webp';


const NavBarContainer = styled.div<{ ismobile: number }>`
  min-height: 56px;
  background-image: url(${topBar});
  ${tw`
    w-full
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-center
    bg-cover
    bg-no-repeat
    bg-bottom	
    h-28
    z-50
    sticky
    top-0
  `}
  ${({ ismobile }) =>
    ismobile
      ? css`
          ${tw`
            h-14
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
