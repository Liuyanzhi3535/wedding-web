import styled from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../../components/nav-bar';
import { TopSection } from '../top-section';
import { OurStory } from '../our-story';
import { Wedding } from '../wedding';
import { Gallery } from '../gallery';
import background from '../../../assets/images/BG.webp';
import footer from '../../../assets/images/Footer@3x.webp';

const PageContainer = styled.div`
  background-image: url(${background});
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    bg-no-repeat
    bg-cover
    bg-bottom
  `}
`;

const Footer = styled.div`
  background-image: url(${footer});
  ${tw`
    bg-no-repeat
    bg-cover
    bg-bottom
    w-full
    h-6
    absolute
    bottom-0
  `}
`;

const HomePage = () => (
  <PageContainer>
    <NavBar />
    <TopSection />
    {/* <Marginer direction="vertical" margin="4em" /> */}
    <OurStory />
    {/* <Marginer direction="vertical" margin="4em" /> */}
    <Wedding />
    {/* <Marginer direction="vertical" margin="4em" /> */}
    <Gallery />
    {/* footer */}
    <Footer />
  </PageContainer>
);

export default HomePage;
