import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import AuthContext from "./context/AuthContext";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
}
  from 'react-router-dom';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Redirect to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Redirect to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );

}

export default App;
