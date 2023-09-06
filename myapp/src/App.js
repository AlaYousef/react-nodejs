import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./compponents/FunctionalGreeting";
import FunctionalGreetingWithProps from "./compponents/FunctionalGreetingWithProps";
import Sidebar from './compponents/Sidebar';
import css from "./compponents/css/Sidebar.module.css"

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to meet you" name = "Alaa" age="32" />
      <Sidebar />
    </div>
  );
}

export default App;
