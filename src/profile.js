import React, { useContext ,useEffect,useState} from "react";
import { FaHandSparkles } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';

import { CountContext } from "./context";

export default function Profile(){
    const {currentUser}=useContext(CountContext)
    const [userTasks, setUserTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (currentUser) {
          const fetchData = async () => {
            try {
              const response = await fetch("http://localhost:5000/tasks");
              console.log(response);
              if (!response.ok) {
                throw new Error('فشل في جلب المهام'); 
              }
              const data = await response.json();
              
            
              const filteredTasks = data.filter(task => task.userEmail === currentUser.email);
              setUserTasks(filteredTasks);
            } catch (error) {
              setError(error.message); 
              console.error("Error fetching tasks:", error);
            }
          };
          
          fetchData();
        }
      }, [currentUser]);


      return(
        <div className="profile-container">
          {currentUser ? (
            <div className="welcom">
              <h2>
                <FaHandSparkles style={{ color: 'orange', marginLeft: '12px' }} />
                <span style={{ color: 'rgb(100, 0, 100)' }}>مرحبًا {currentUser.email}</span>
              </h2>
              <div>
                <h3><span style={{ color: 'rgb(100, 0, 100)' }}>email:</span> {currentUser.email}</h3>
                <h3><span style={{ color: 'rgb(100, 0, 100)' }}>password:</span> {currentUser.password}</h3>
              </div>
              
            
              <h3><span style={{ color: 'rgb(100, 0, 100)' }}>مهامك</span></h3>
              {error ? (
                <p style={{ color: 'red' }}>حدث خطأ: {error}</p>
              ) : userTasks.length > 0 ? (
                <ul>
                  {userTasks.map((task, index) => (
                    <li key={index}>
                      📝 {task.task} - 🕒 {task.Date}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>لا يوجد مهام بعد.</p>
              )}
            </div>
          ) : (
            <div className="nowelcom">
              <h2>
                <MdErrorOutline style={{ color: 'red', marginLeft: '12px' }} />
                لا يوجد بيانات؛ يرجى تسجيل الدخول.
              </h2>
            </div>
          )}
        </div>
      );
}