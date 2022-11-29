import Mainpage from './Component/Mainpage';
import Navbar from './Component/Navbar';
import './App.css';
import Topbar from './Component/Topbar';
// import Practice from './Component/Practice';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="mainpage">
        
      <Navbar/>
        <Mainpage/>
      </div>
      {/* <Practice/> */}
    </div>
  );
}

export default App;
