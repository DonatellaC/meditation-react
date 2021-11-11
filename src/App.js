import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Breathe from "./screens/Breathe/Breathe";
import MeditationZen from "./screens/MeditationZen/MeditationZen";
import Music from "./screens/Music/Music";
import Welcome from "./screens/Welcome/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="meditation" element={<MeditationZen />} />
          <Route path="breathe" element={<Breathe />} />
          <Route path="music" element={<Music />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
