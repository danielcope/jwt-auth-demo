import "./css/App.css";
import "./index.css";
import routes from "./routes";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col justify-center items-center content-center">
      {routes}
    </div>
  );
}

export default App;
