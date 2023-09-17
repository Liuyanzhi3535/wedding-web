import { styled } from 'styled-components';
import tw from 'twin.macro';

interface TitleProps {
  text: string;
}

const SectionTitleContainer = styled.div`
  ${tw`
    text-gray-800
    text-4xl
    sm:uppercase
    mb-6
  `}
`;

function SectionTitle(props: TitleProps) {
  return <SectionTitleContainer>{props.text}</SectionTitleContainer>;
}

export default SectionTitle;
