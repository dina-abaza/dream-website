import React, { useContext,useState } from 'react';
import { CountContext } from './context'; 

const Services = () => {
  const { currentUser } = useContext(CountContext);  
  const [showModal, setShowModal] = useState(false);
  const [task,setTask]=useState('');
  const [date,setDate]=useState('');
  if (!currentUser) {
    return (
      <div className="services">
        <h1>يرجى تسجيل الدخول للتمتع بخدماتنا</h1>
        <p>للدخول إلى خدماتنا، يرجى تسجيل الدخول أولاً.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: task,
        Date,
        done: false
      })
    });
  console.log('tasks', {text: task,
    Date,
    done: false})
    setTask('');
    setDate('');
    setShowModal(false);
  };
  
  return (
    <div className="services">
      <h1>خدماتنا</h1>

      <div className="service-item">
        <h3>تنظيم المهام اليومية</h3>
        <p>نساعدك في تنظيم مهامك اليومية من خلال إضافة المهام وتحديد مواعيد لها، مع إشعارات تذكير عشان تخلص شغلك في الوقت المحدد.</p>
      
      </div>

      <div className="service-item">
        <h3>إعداد تقارير التقدم</h3>
        <p>بإمكانك متابعة تقدمك من خلال تقارير دورية توضح لك نسبة الإنجاز في مهامك.</p>
      </div>

      <div className="service-item">
        <h3>التذكير بالمواعيد الهامة</h3>
        <p>خدمة التذكير بالمواعيد الهامة تضمن لك عدم نسيان أي موعد أو مهمة ضرورية.</p>
        <button onClick={() => setShowModal(true)}>جرب الان</button>
        {showModal && (
      <form className="modal" onSubmit={handleSubmit}>
        <h3>أضف مهمتك الأولى 👇</h3>
        <input type="text" placeholder="اكتب المهمة" value={task} onChange={(e)=>setTask(e.target.value)} required/>
        <input type="datetime-local" value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <div className='okbuttons'>
        <button type='submit'>إرسال</button>
        <button onClick={() => setShowModal(false)}>إلغاء</button>
        </div>
      
      </form>
    )}
      </div>
    </div>
  );
};

export default Services;
