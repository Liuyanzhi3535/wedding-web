import tw, { styled } from "twin.macro";
import SectionTitle from "../../components/section-title";

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
    border
    border-gray-300
  `};
`;

const Discription = styled.div`
    ${tw`
    inline-block
    w-[300px]
    bg-gray-100
  `}
`

export function OurStory() {
  return (
    <OurStoryContainer id="ourStory">
      <SectionTitle text="Our Story"></SectionTitle>
      <Discription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iste, aliquid autem. Quasi saepe maxime reprehenderit. 
        Dicta laborum exercitationem omnis laudantium sapiente necessitatibus nihil. 
        Praesentium libero nihil veniam laudantium, tempora magni minus rem impedit adipisci veritatis odio pariatur inventore. 
        Maxime numquam, sed, fugiat incidunt eligendi similique explicabo impedit eaque ducimus perferendis, repellendus voluptas ab eum dolore et? Adipisci illum quasi impedit obcaecati facilis, quidem, consequatur dolor quia iste cum dicta laboriosam est voluptate velit molestias sint temporibus minima optio. Numquam eveniet minus aspernatur, 
      </Discription>
    </OurStoryContainer>
  );
}
