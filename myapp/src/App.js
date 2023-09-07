import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./compponents/FunctionalGreeting";
import FunctionalGreetingWithProps from "./compponents/FunctionalGreetingWithProps";
import Sidebar from './compponents/Sidebar';
import css from "./compponents/css/Sidebar.module.css";
import ClassGreeting from "./compponents/ClassGreeting";
import NavBarSimple from "./compponents/NavBarSimple";

function App() {
  return (
    <div className="App">
    
       <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;
