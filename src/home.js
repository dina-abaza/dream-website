import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>مرحبًا بك في تطبيق الأحلام!</h1>
      <p>نحن هنا لمساعدتك في تنظيم حياتك بسهولة.</p>
      <Link to="/about">اعرف المزيد عن التطبيق</Link>
    </div>
  );
};

export default Home;