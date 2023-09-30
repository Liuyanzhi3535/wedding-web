import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import { menuStyles } from './menuStyles';
import { SCREENS } from '../../../../responsive';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import home from '../../../assets/images/Group_146@3x.webp';
import story from '../../../assets/images/Group_144@3x.webp';
import message from '../../../assets/images/Group_153@3x.webp';
import camera from '../../../assets/images/Group_148@3x.webp';

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

const NavItem = styled.li<{ menu: 0 | 1; icon: string }>`
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
          &:before {
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
        background-image: url(${icon});
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
    {
      lable: 'Home',
      value: 'home',
      icon: home,
    },
    {
      lable: 'Our Story',
      value: 'ourStory',
      icon: story,
    },
    {
      lable: 'Wedding',
      value: 'wedding',
      icon: message,
    },
    {
      lable: 'Gallery',
      value: 'gallery',
      icon: camera,
    },
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
