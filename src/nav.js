
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountContext } from './context';

export default function NavBar(){
   const {toggleSidebar}=useContext(CountContext);
return(
    <div className="navbar">
    <div className="navbar-left">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
  
      <div className="logo">
        <Link to="/">home</Link>
      </div>
    </div>
  
    <div className="navbar-links">
      <Link to='/services'>الخدمات</Link>
      <Link to='/contact'>تواصل معنا</Link>
      <Link to='/login'>تسجيل الدخول</Link>
    </div>
  </div>
)
};