
import React, { useContext, useState } from 'react'
import { CountContext } from './context';

export default function Login(){
    const[email,setEmail]=useState('')
    const [pass,setPass]=useState('')
  const{setCurrentUser,currentUser}=useContext(CountContext);

   async function handelSubmit(e){
e.preventDefault();
const user={
    email: email,
    password: pass,
}
try{
    const res=await fetch('http://localhost:5000/users',{
        method:'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
    })
    const data=await res.json();
    if(res.ok){
        console.log('تم التسجيل بنجاح:',data);
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));

    }else{
        console.log('فشل الارسال:',data.message)
    }
} 


catch(error){
    console.error('خطأ في الاتصال بالسيرفر:', error.message);
}
    }
    return(
        !currentUser?(
            <div className='parent-form'>
            <form onSubmit={handelSubmit} className='form'>
                <h2>يرجي تسجيل الدخول</h2>
                <input type='email' placeholder='ادخل الايميل' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='passWord' placeholder='ادخل الباسوورد' value={pass} onChange={(e)=>setPass(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
            </div>
        ):(
<div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'column',marginTop:'50px'}}>
    <h1>انت بالفعل مسجل لدينا </h1>
    <h3>هيا تمتع بخدماتنا</h3>
</div>
        )
       

     
    )
}
