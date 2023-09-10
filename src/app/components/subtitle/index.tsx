import { styled } from 'styled-components';
import tw from 'twin.macro';

interface SubtitleProps {
  text: string;
}

const Title = styled.h2`
  ${tw`
    font-bold
    sm:text-2xl
    text-gray-700
    text-lg
  `}
`;

function SubTitle(props: SubtitleProps) {
  return <Title>{props.text}</Title>;
}

export default SubTitle;
