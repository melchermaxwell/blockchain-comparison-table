import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        {/* <Route path='*'>
          <Navigate to='/'/>
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
