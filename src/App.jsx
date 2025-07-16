import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
