
import { createContext } from "react";
import { useState,useEffect  } from "react";


export const CountContext =createContext();

export default function ContextProvider({children}){
    const [openSide,setOpenSide]=useState(false);
    const [currentUser,setCurrentUser]=useState(null);

    function toggleSidebar(){
        setOpenSide(!openSide) 
    }
    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");
    
        if (savedUser) {
            try {
                // تحقق لو القيمة صالحة وده طريقة أمنة لقراءة الـ localStorage
                const user = JSON.parse(savedUser);
                setCurrentUser(user);
            } catch (e) {
                // لو حصل خطأ في JSON.parse
                console.error("خطأ في قراءة بيانات المستخدم من localStorage:", e);
                localStorage.removeItem("currentUser"); // امسحي البيانات الغير صالحة
            }
        }
    }, []);

return(
    <CountContext.Provider value={{toggleSidebar,openSide,currentUser,setCurrentUser}}>
{children}
    </CountContext.Provider>
)
}