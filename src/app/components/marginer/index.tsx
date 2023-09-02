import { styled } from 'styled-components';

export interface MarginProps {
  margin: number | string;
  direction?: 'horizontal' | 'vertical';
}

const HorizontalMargin = styled.span<MarginProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<MarginProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

function Marginer(props: MarginProps) {
  const { direction } = props;

  if (direction === 'horizontal') {
    return <HorizontalMargin {...props} />;
  } else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: 'horizontal',
};

export default Marginer;
