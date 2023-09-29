import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import SubTitle from '../subtitle';

const TimerContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-4
    m-8
  `}
`;

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
    text-content-green
    bg-white/50
    p-2
    mx-1
    sm:h-28
    sm:w-28
    sm:text-6xl
    h-10
    w-10
    text-2xl
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
  const initialState = {
    day: 0,
    hour: 0,
    minute: 0,
    sec: 0,
  };
  const [distanceResult, setDistanceResult] = useState(initialState);

  const TAGET_DATE = new Date(`2023-10-21`);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    const countDownTimer = setInterval(function () {
      const countDown = TAGET_DATE.getTime();
      const distance = countDown - new Date().getTime();
      const isExpired = distance < 0;

      if (isExpired) {
        clearInterval(countDownTimer);
        setDistanceResult(initialState);
        return
      }

      setDistanceResult({
        day: Math.floor(distance / day),
        hour: Math.floor((distance % day) / hour),
        minute: Math.floor((distance % hour) / minute),
        sec: Math.floor((distance % minute) / second),
      });
    }, 1000);
    return () => clearInterval(countDownTimer);
  });

  return (
    <TimerContainer>
      <SubTitle text="倒數"></SubTitle>
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
