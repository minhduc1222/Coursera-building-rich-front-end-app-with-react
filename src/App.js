import './App.css';
import NavBar from './navbar';
import Home from "./home";

function App() {
  return(
    <div className="app">
      <NavBar/>
      <div className="content">
        <h1>App Component</h1>
        <Home/>
      </div>
    </div>
  )
}

export default App;
