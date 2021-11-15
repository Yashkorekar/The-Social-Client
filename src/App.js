import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";

import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route  path="/login"  element={<Login/>} />
        <Route  path="/register"  element={<Register/>} />
        <Route  path="/profile/:username"  element={<Profile/>} />
      </Routes>
    </Router>
  );

}

export default App;
