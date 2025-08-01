import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";
// import Service from "./Component/Service";
import ServiceImages from "./Component/ServiceImages";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Home />
      <About />
      {/* <Service /> */}
      <ServiceImages />
    </div>
  );
}

export default App;
