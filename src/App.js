import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landingpage from "./components/Landingpage"
import Homepage from "./components/Homepage"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/home" element={<Homepage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
