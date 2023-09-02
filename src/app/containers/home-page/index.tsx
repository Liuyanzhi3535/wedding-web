import styled from 'styled-components';
import tw from 'twin.macro';
import Marginer from '../../components/marginer';
import NavBar from '../../components/nav-bar';
import { TopSection } from '../top-section';
import { OurStory } from '../our-story';
import { Wedding } from '../wedding';
import { Gallery } from '../gallery';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
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
    <Marginer direction="vertical" margin="4em" />
    <Gallery />
    {/* footer */}
  </PageContainer>
);

export default HomePage;
