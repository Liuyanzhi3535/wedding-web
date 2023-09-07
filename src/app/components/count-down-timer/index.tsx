import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

const TimerContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-4
    m-4
  `}
`;

const Title = styled.h1`
  ${tw`
    font-bold
    sm:text-2xl
    text-gray-700
    text-lg
  `}
`

const ContentContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-end
    sm:gap-3
    gap-1
  `}
`;

const NumberBlock = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    sm:h-28
    sm:w-28
    p-4
    text-gray-700
    bg-gray-200
    sm:text-6xl
    text-2xl
    h-12
    w-12
  `}
`;

const TextBlock = styled.div`
  ${tw`
    text-gray-800
    font-semibold
    sm:text-xl
    text-xs
  `}
`;

function CountDownTimer() {
  const [distanceResult, setDistanceResult] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    sec: 0,
  });

  const TAGET_DATE = new Date(`2023-10-21`);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    const countDownTimer = setInterval(function () {
      const countDown = TAGET_DATE.getTime();
      const distance = countDown - new Date().getTime();

      setDistanceResult({
        day: Math.floor(distance / day),
        hour: Math.floor((distance % day) / hour),
        minute: Math.floor((distance % hour) / minute),
        sec: Math.floor((distance % minute) / second),
      });
      if (distance < 0) {
        clearInterval(countDownTimer);
      }
    }, 1000);
    return () => clearInterval(countDownTimer);
  });

  return (
    <TimerContainer>
      <Title>倒數</Title>
      <ContentContainer>
        <NumberBlock>{distanceResult.day}</NumberBlock>
        <TextBlock>天</TextBlock>
        <NumberBlock>{distanceResult.hour}</NumberBlock>
        <TextBlock>小時</TextBlock>
        <NumberBlock>{distanceResult.minute}</NumberBlock>
        <TextBlock>分</TextBlock>
        <NumberBlock>{distanceResult.sec}</NumberBlock>
        <TextBlock>秒</TextBlock>
      </ContentContainer>
    </TimerContainer>
  );
}

export default CountDownTimer;
