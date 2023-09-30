import { css, styled } from 'styled-components';
import tw from 'twin.macro';
import lineRight from '../../../assets/images/L_LINE@3x.webp';
import lineLeft from '../../../assets/images/L_LINE@3x.webp';
import flowerRight from '../../../assets/images/R_花@3x.webp';
import flowerLeft from '../../../assets/images/L_花@3x.webp';

interface TitleProps {
  titleImg: string;
  hasdecoration?: boolean;
}

const SectionTitleContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const LineLeft = styled.div<{ hasdecoration: 0 | 1 }>`
  background-image: url(${lineLeft});
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-center

    md:w-56
    w-14
    h-16
  `}
  ${({ hasdecoration }) =>
    hasdecoration
      ? css`    
        &:before {
          content: '';
          background-image: url(${flowerLeft});
          ${tw`
            inline-block
            absolute
            bg-no-repeat
            bg-contain
            bg-left
            
            md:top-[-40px]
            md:left-[-92px]
            md:w-36
            md:h-36
            
            top-[-8px]
            left-[-68px]
            w-20
            h-20
          `}
      `
      : css`    
        &:before {
          content: '';
          background-image: url(${lineRight});
          ${tw`
            md:hidden
            inline-block
            absolute
            left-[-56px]
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
  background-image: url(${lineRight});
  ${tw`
    relative
    bg-no-repeat
    bg-contain
    bg-center

    md:w-56

    w-14
    h-16
  `}
  ${({ hasdecoration }) =>
    hasdecoration
      ? css`    
        &:before {
          background-image: url(${flowerRight});
          content: '';
          ${tw`
            inline-block
            absolute
            bg-no-repeat
            bg-contain
            bg-right

            md:top-[-48px]
            md:right-[-92px]
            md:w-40
            md:h-40

            top-[-16px]
            right-[-68px]
            w-24
            h-24
          `}
      `
      : css`    
        &:before {
          content: '';
          background-image: url(${lineRight});
          ${tw`
            md:hidden
            inline-block
            absolute
            right-[-56px]
            bg-no-repeat
            bg-contain
            bg-center
            w-14
            h-16
          `}
      `}
  }
`;

const TitleImage = styled.div<{ image: string }>`
  ${tw`
    bg-no-repeat
    bg-contain
    bg-center

    xl:w-80
    xl:h-16

    md:w-56
    md:h-16

    w-28
    h-16
  `}
  ${({ image }) =>
    css`
      background-image: url(${image});
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
