import { Routes, Route } from "react-router-dom";

// import Landing from "./components/Landing";
import Counter from "./components/Counter";

export default (
  <Routes>
    {/* <Route exact path="/" element={<Landing />} /> */}
    <Route exact path="/" element={<Counter />} />
    {/* <Route path="/contactpage" element={<ContactPage />} /> */}
  </Routes>
);
