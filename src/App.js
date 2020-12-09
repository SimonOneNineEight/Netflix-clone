import Board from "./components/Board";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #000000;
  color: #f8f8ff;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Banner />
      <Board />
    </AppWrapper>
  );
}

export default App;
