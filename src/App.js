import Mainpage from './Component/Mainpage';
import Navbar from './Component/Navbar';
import './App.css';
// import Practice from './Component/Practice';

function App() {
  return (
    <div className="App">
      
      <div className="mainpage">
      <Navbar/>
        <Mainpage/>
      </div>
      {/* <Practice/> */}
    </div>
  );
}

export default App;
