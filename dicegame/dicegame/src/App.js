import Header from "./components/header.jsx";
import Play from "./components/play.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Play" element={<Play />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
