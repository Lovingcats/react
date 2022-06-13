import Gallery from "./components/gallery.jsx";
import Slide from "./components/slide";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Slide />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
