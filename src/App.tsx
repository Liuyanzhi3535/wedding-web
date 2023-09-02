import styled from 'styled-components';
import './App.css';
import tw from 'twin.macro';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    // <div className="min-h-screen flex justify-center items-center">
    <AppContainer>
      fff
      <h1 className="text-3xl font-bold text-blue-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
    </AppContainer>
    // </div>
  );
}

export default App;
