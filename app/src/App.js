import logo from './logo.svg';
import './App.css';

import Greeting from './components/Greetings';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <User/>
    </div>
  );
}

export default App;
