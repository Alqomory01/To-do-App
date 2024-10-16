import './App.css';
import styled from 'styled-components';
import Todowrapper from './components/Todowrapper';

function App() {
  return (
    <Wrapper>
    <div className="App">
      <Todowrapper/>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
width:100%;`
export default App;
