import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CountContext } from "./context";

export default function SideBar(){
    const navigate=useNavigate();
    const {openSide,setCurrentUser,currentUser}=useContext(CountContext);
    function handeleLogout(){
   if (currentUser){
    setCurrentUser(null)
    navigate('/')
   }
     
    }
    return(
        openSide&&(
        <div className="side">
            
            <div className="side-content">
                <Link to={'/profile'}>الملف الشخصي</Link>
                <Link to={'/setting'}>الاعدادات</Link>
               <button onClick={handeleLogout} disabled={!currentUser}>تسجيل خروج</button>
            </div>
        </div>)
        
    )
}