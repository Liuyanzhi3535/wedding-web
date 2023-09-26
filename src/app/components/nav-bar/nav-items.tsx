import { css, styled } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
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

const NavItem = styled.li<{ menu: 0 | 1; icon: TwStyle }>`
  ${tw`
    text-sm
    md:text-sm
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:brightness-75
    relative
    flex
    justify-center
    items-center
    uppercase
    text-white
    font-sans
    tracking-wide
  `};

  ${({ menu }) =>
    menu
      ? css`
          ${tw`
            text-white
            text-xl
            focus:text-white
            m-1.5
          `}
          &:before{ 
            ${tw`
              !hidden
            `}
          }
        `
      : ``};

  &:before {
    content: '';
    ${({ icon }) =>
      css`
        ${icon}
        ${tw`
          inline-block
          bg-transparent
          absolute
          top-[-28px]
          bg-contain
          bg-no-repeat
          h-5
          w-7
          bg-amber-50
          translate-x-[-50%]
          left-1/2
        `}
      `}
  }
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const items = [
    { lable: 'Home', value: 'home', icon: tw`bg-home` },
    { lable: 'Our Story', value: 'ourStory', icon: tw`bg-story` },
    { lable: 'Wedding', value: 'wedding', icon: tw`bg-message` },
    { lable: 'Gallery', value: 'gallery', icon: tw`bg-camera` },
  ];
  const navItems = items.map((item) => (
    <NavItem key={item.value} menu={0} icon={item.icon}>
      <a href={'#' + item.value}>{item.lable}</a>
    </NavItem>
  ));
  const mobileNavItems = items.map((item) => (
    <NavItem key={item.value} menu={1} icon={item.icon}>
      <a href={'#' + item.value}>{item.lable}</a>
    </NavItem>
  ));

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer menu={1}>{mobileNavItems}</ListContainer>
      </Menu>
    );
  }

  return <ListContainer menu={0}>{navItems}</ListContainer>;
}

export default NavItems;