import { styled } from 'styled-components';
import tw from 'twin.macro';
import NavItems from './nav-items';

const NavBarContainer = styled.div`
  min-height: 68px;
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
`;

function NavBar() {
  return (
    <NavBarContainer>
      {/* logo */}
      <NavItems/>
    </NavBarContainer>
  );
}

export default NavBar;
