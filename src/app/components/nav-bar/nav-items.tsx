import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import { menuStyles } from './menuStyles';
import { SCREENS } from '../../../../responsive';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';

const ListContainer = styled.ul<{ menu? }>`
  ${tw`
    flex
    list-none
  `}
  ${({ menu }) =>
    !menu &&
    css`
      ${tw`
      w-1/2
      flex
      flex-row
      justify-between
      `};
    `};
`;

const NavItem = styled.li<{ menu? }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
     `};
    `};
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const items = ['Home', 'Our Story', 'Wedding', 'Gallery'];
  const navItems = items.map((item) => (
    <NavItem key={item}>
      <a href="./test">{item}</a>
    </NavItem>
  ));
  const mobileNavItems = items.map((item) => (
    <NavItem key={item} menu>
      <a href="./test">{item}</a>
    </NavItem>
  ));

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer menu>{mobileNavItems}</ListContainer>
      </Menu>
    );

  return <ListContainer>{navItems}</ListContainer>;
}

export default NavItems;
