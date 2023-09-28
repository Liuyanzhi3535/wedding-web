import tw, { styled } from 'twin.macro';
import SectionTitle from '../../components/section-title';

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
  `};
`;

const Deco = styled.div`
  ${tw`
    flex
    items-center
    overflow-hidden
    h-16
    relative
  `}
`;

const Gress = styled.div`
  ${tw`
    bg-gress
    bg-no-repeat
    bg-contain
    h-[120px]
    w-[120px]
  `}
`;

const Flower = styled.div`
  ${tw`
    bg-flower
    bg-no-repeat
    bg-contain
    h-[64px]
    w-[120px]
  `}
`;
const Empty = styled.div`
  ${tw`
  inline-block
    h-[120px]
    w-[120px]
  `}
`;

const Discription = styled.div`
  ${tw`
    m-6
    inline-block
    w-[300px]
    text-content-green
    tracking-wide
  `}
`;

export function OurStory() {
  return (
    <OurStoryContainer id="ourStory">
      <SectionTitle titleImg={tw`bg-our-story`}></SectionTitle>
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
