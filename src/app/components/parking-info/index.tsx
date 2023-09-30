import { styled } from 'styled-components';
import SubTitle from '../subtitle';
import tw from 'twin.macro';
import map from '../../../assets/images/地圖@3x.webp';
import parkingLot1 from '../../../assets/images/Rectangle86@3x.webp';
import parkingLot2 from '../../../assets/images/Rectangle87@3x.webp';
import parkingLot3 from '../../../assets/images/Rectangle88@3x.webp';

const LocationText = styled.a`
  ${tw`
    absolute
    bg-no-repeat
    bg-contain
    bg-center
    text-xs
    text-[#383838]
    font-bold
    flex
    justify-center
    items-center
    text-center
  `}
`;

const Map = styled.div`
  background-image: url(${map});
  ${tw`
    relative
    mt-6
    bg-no-repeat
    bg-contain
    bg-center

    md:my-8
    md:h-[280px]
    md:w-[480px]

    h-44
    w-72
`}
`;

function ParkingInfo() {
  return (
    <div className="flex flex-col items-center m-6 gap-2">
      <SubTitle text="停車資訊"></SubTitle>
      <Map>
        <LocationText
          className="-top-16 -left-12 md:-top-16 md:-left-0 h-28 w-36"
          style={{ backgroundImage: `url(${parkingLot1})` }}
          target="_blank"
          href="https://maps.app.goo.gl/JDQy4Y3tbZ7BLdbj8"
        >
          <span className="-translate-y-1">
            竹市東區
            <br />
            區公所停車場
          </span>
        </LocationText>

        <LocationText
          className="top-2 -right-12 md:top-16 md:right-6 h-28 w-36"
          style={{ backgroundImage: `url(${parkingLot2})` }}
          target="_blank"
          href="https://maps.app.goo.gl/TjvvcY6mcAxT6P6T9"
        >
          <span className="-translate-y-1">
            東大路橋下
            <br />
            中華停車場
          </span>
        </LocationText>

        <LocationText
          className="top-28 -left-10 md:top-48 md:-left-4 h-28 w-36"
          style={{ backgroundImage: `url(${parkingLot3})` }}
          target="_blank"
          href="https://maps.app.goo.gl/gPfuAuvPnVaU6bMs9"
        >
          <span className="">停九停車場</span>
        </LocationText>
      </Map>
    </div>
  );
}

export default ParkingInfo;
