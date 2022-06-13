import Gallery from "./components/gallery.jsx";
import Slide from "./components/slide";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Slide />
        <Gallery />
      </div>
    </BrowserRouter>
  );
}

export default App;
