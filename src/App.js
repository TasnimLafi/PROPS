import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Playerlist from './componants/Playerlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Playerlist/>
    </div>
  );
}

export default App;
