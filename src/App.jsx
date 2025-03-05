import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/Navbar.css";

// component is just a function in JS code to return some kind of JSX Code
function App() {
  // const movieNumer = 2;

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
// state is something where once it is updated, the component will change and re-render itself to show the new state
