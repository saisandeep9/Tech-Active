import "./App.css";
import Home from "./compnents/home";
import NavBar from "./compnents/navBar"
import CoverPage from "./compnents/coverPage"
import MainPage from "./compnents/mainPage"
import NavBar2 from "./compnents/navBar2"

function App() {
  return (
    <div>
      <NavBar/>
      <CoverPage />
      <NavBar2/>
      <MainPage/>
      {/* <Home /> */}
      
    </div>
  );
}

export default App;
