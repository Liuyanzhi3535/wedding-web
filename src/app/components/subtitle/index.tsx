import { styled } from 'styled-components';
import tw from 'twin.macro';

interface SubtitleProps {
  text: string;
}

const Title = styled.h2`
  ${tw`
    font-bold
    text-content-green
    tracking-widest
    flex
    items-center
    gap-0.5
    uppercase

    md:text-2xl

    text-base
  `}
`;

function SubTitle(props: SubtitleProps) {
  return (
    <Title>
      {props.text}
      <svg
        className="fill-content-green"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 256 512"
      >
        <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
      </svg>
    </Title>
  );
}

export default SubTitle;