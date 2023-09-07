import tw, { styled } from "twin.macro";
import CountDownTimer from "../../components/count-down-timer";

const WeddingContainer = styled.div`
  /* min-height: 400px; */
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    border
    border-gray-300
  `};
`;

export function Wedding() {
  return (
    <WeddingContainer id="wedding">
      <h1>wedding</h1>
      <div></div>
      <CountDownTimer></CountDownTimer>
    </WeddingContainer>
  );
}
