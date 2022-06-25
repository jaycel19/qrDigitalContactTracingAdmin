import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReviewByDate from './pages/ReviewByDate';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviewbydate" element={<ReviewByDate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
