import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Gryffindor from "./containers/Gryffindor/Gryffindor";
import Hufflepuff from "./containers/Hufflepuff/Hufflepuff";
import Slytherin from "./containers/Slytherin/Slytherin";
import Ravenclaw from "./containers/Ravenclaw/Ravenclaw";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="gryffindor" element={<Gryffindor></Gryffindor>}></Route>
        <Route path="gryffindor" element={<Gryffindor></Gryffindor>}></Route>
        <Route path="hufflePuff" element={<Hufflepuff></Hufflepuff>}></Route>
        <Route path="ravenclaw" element={<Ravenclaw></Ravenclaw>}></Route>
        <Route path="slytherin" element={<Slytherin></Slytherin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
