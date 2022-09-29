import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='questions1'>
        <Body></Body>
        <div className='questions2'>
          <Question></Question>
        </div>
      </div>
    </div>
  );
}

export default App;
