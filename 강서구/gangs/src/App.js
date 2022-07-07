import Gallery from "./components/Main.jsx";
import Slide from "./components/slide";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slide />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
