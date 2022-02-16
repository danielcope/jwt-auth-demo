import axios from "axios";
import "./css/App.css";

function App() {
  const hit = async () => {
    await axios
      .get("/hit")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={() => hit()}>Hit</button>
    </div>
  );
}

export default App;
