import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Stations from "./components/pages/Stations";
import SingleStation from "./components/SingleStation";
import Journeys from "./components/pages/Journeys";
import NotFound from "./components/pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/stations/:name" element={<SingleStation name="name" />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
