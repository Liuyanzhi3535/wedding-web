import { css, styled } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';

interface TitleProps {
  titleImg: TwStyle;
  hasdecoration?: boolean;
}

const SectionTitleContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const LineLeft = styled.div<{ hasdecoration: 0 | 1 }>`
  ${tw`
    relative
    bg-line-left
    bg-no-repeat
    bg-contain
    bg-center
    w-14
    h-16
  `}
  ${({ hasdecoration }) =>
    hasdecoration
      ? css`    
        &:before {
          content: '';
          ${tw`
            inline-block
            absolute
            top-[-8px]
            left-[-68px]
            bg-flower-left
            bg-no-repeat
            bg-contain
            bg-left
            w-20
            h-20
          `}
      `
      : css`    
        &:before {
          content: '';
          ${tw`
            inline-block
            absolute
            left-[-56px]
            bg-line-left
            bg-no-repeat
            bg-contain
            bg-center
            w-14
            h-16
          `}
      `}
  }
`;

const LineRight = styled.div<{ hasdecoration: 0 | 1 }>`
  ${tw`
    relative
    bg-line-right
    bg-no-repeat
    bg-contain
    bg-center
    w-14
    h-16
  `}
  ${({ hasdecoration }) =>
    hasdecoration
      ? css`    
        &:before {
          content: '';
          ${tw`
            inline-block
            absolute
            top-[-16px]
            right-[-68px]
            bg-flower-right
            bg-no-repeat
            bg-contain
            bg-right
            w-24
            h-24
          `}
      `
      : css`    
        &:before {
          content: '';
          ${tw`
            inline-block
            absolute
            right-[-56px]
            bg-line-right
            bg-no-repeat
            bg-contain
            bg-center
            w-14
            h-16
          `}
      `}
  }
`;

const TitleImage = styled.div<{ image: TwStyle }>`
  ${tw`
    bg-no-repeat
    bg-contain
    bg-center
    xl:w-80
    xl:h-44
    lg:w-48
    lg:h-36
    w-28
    h-16
  `}
  ${({ image }) =>
    css`
      ${image}
    `}
`;

function SectionTitle(props: TitleProps) {
  return (
    <SectionTitleContainer>
      <LineLeft hasdecoration={props.hasdecoration ? 1 : 0} />
      <TitleImage image={props.titleImg}></TitleImage>
      <LineRight hasdecoration={props.hasdecoration ? 1 : 0} />
    </SectionTitleContainer>
  );
}

export default SectionTitle;
