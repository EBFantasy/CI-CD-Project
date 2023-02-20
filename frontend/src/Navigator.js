import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';
import styleNav from './Navigator.module.css';


function Navigator() {
  return (
    <BrowserRouter>
      <div className={styleNav.navMenu}>
        <Link className={styleNav.navComponent} to="/login">Login</Link>
        <Link className={styleNav.navComponent} to="/register">Register</Link>
        <Link className={styleNav.navComponent} to="/home">Home</Link>
        <div className={styleNav.dot}></div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigator;
