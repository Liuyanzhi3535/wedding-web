import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import { menuStyles } from './menuStyles';
import { SCREENS } from '../../../../responsive';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';

const ListContainer = styled.ul<{ menu: 0 | 1 }>`
  ${tw`
    flex
    list-none
  `}
  ${({ menu }) =>
    !menu
      ? css`
          ${tw`
            w-1/2
            flex
            flex-row
            justify-between
            `};
        `
      : ``};
`;

const NavItem = styled.li<{ menu: 0 | 1 }>`
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
    menu
      ? css`
          ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
          `};
        `
      : ``};
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const items = [
    { lable: 'Home', value: 'home' },
    { lable: 'Our Story', value: 'ourStory' },
    { lable: 'Wedding', value: 'wedding' },
    { lable: 'Gallery', value: 'gallery' },
  ];
  const navItems = items.map((item) => (
    <NavItem key={item.value} menu={0}>
      <a href={'#' + item.value}>{item.lable}</a>
    </NavItem>
  ));
  const mobileNavItems = items.map((item) => (
    <NavItem key={item.value} menu={1}>
      <a href={'#' + item.value}>{item.lable}</a>
    </NavItem>
  ));

  if (isMobile){
    return (
      <Menu right styles={menuStyles}>
        <ListContainer menu={1}>{mobileNavItems}</ListContainer>
      </Menu>
    );}

  return <ListContainer menu={0}>{navItems}</ListContainer>;
}

export default NavItems;
