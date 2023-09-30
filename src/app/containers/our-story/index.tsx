import tw, { styled } from 'twin.macro';
import SectionTitle from '../../components/section-title';
import ourStory from '../../../assets/images/OUR_STORY@3x.webp';
import flower from '../../../assets/images/花@3x.webp';
import gress from '../../../assets/images/deco1@3x.webp';

const OurStoryContainer = styled.div`
  min-height: 400px;
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    relative
  `};
`;

const Deco = styled.div`
  ${tw`
    flex
    items-center
    h-16
  `}
`;

const Gress = styled.div`
  background-image: url(${gress});
  ${tw`
    bg-no-repeat
    bg-contain

    lg:left-[5%]

    md:absolute
    md:top-[10%]
    md:left-[0%]
    md:h-[240px]
    md:w-[240px]
    
    h-[120px]
    w-[120px]
  `}
`;

const Flower = styled.div`
  background-image: url(${flower});
  ${tw`
    bg-no-repeat
    bg-contain
    h-[64px]
    w-[120px]
  `}
`;

const Empty = styled.div`
  ${tw`
    md:absolute

    inline-block
    h-[120px]
    w-[120px]
  `}
`;

const Discription = styled.div`
  ${tw`
    lg:w-[600px]
    lg:text-lg

    md:w-[420px]

    w-[300px]
    m-6
    inline-block
    text-content-green
    tracking-wide
  `}
`;

export function OurStory() {
  return (
    <OurStoryContainer id="ourStory">
      <SectionTitle titleImg={ourStory}></SectionTitle>
      <Deco>
        <Gress />
        <Flower />
        <Empty />
      </Deco>
      <Discription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aliquid
        autem. Quasi saepe maxime reprehenderit. Dicta laborum exercitationem
        omnis laudantium sapiente necessitatibus nihil. Praesentium libero nihil
        veniam laudantium, tempora magni minus rem impedit adipisci veritatis
        odio pariatur inventore. Maxime numquam, sed, fugiat incidunt eligendi
        similique explicabo impedit eaque ducimus perferendis, repellendus
      </Discription>
    </OurStoryContainer>
  );
}
