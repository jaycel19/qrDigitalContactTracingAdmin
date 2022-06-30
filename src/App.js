import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";




import ReviewByDate from './pages/ReviewByDate';
import Register from './pages/Register';
import Login from './pages/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  
  useEffect(() => {
    if(authenticated){
      return <Navigate to="/" replace />      
    }
  }, [authenticated])


  return (
    <Router>
      <div className="App"> 
        <Header />
        {authenticated && <Navigation currentUser={currentUser} />}
        {console.log(authenticated)}
        <Routes>
          <Route path="/" element={authenticated ? <Home /> : <Navigate to="/admin/login" replace />} />
          <Route path="/reviewbydate" element={<ReviewByDate />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login setAuthenticated={setAuthenticated} authenticated={authenticated} setCurrentUser={setCurrentUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
