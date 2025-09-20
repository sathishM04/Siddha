import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <PrivateRoute />
    </div>
  );
}

export default App;
