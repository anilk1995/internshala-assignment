import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Hosting from "./pages/Hosting";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/home/hosting-for-all/hosting/hosting6/hosting5"
          element={<Hosting />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
