import React from 'react';

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact-info">
      <h1>اتصل بنا</h1>

        
        <div className="contact-item">
          <h3>📞 الهاتف</h3>
          <p><a href="tel:+20123456789">اتصل بنا على: +20 123 456 789</a></p>
        </div>

        <div className="contact-item">
          <h3>💬 الواتساب</h3>
          <p>
            <a 
              href="https://wa.me/20123456789" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              تواصل معنا عبر الواتساب
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>📘 فيسبوك</h3>
          <p>
            <a 
              href="https://facebook.com/yourpage" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              زر صفحتنا على فيسبوك
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>📧 البريد الإلكتروني</h3>
          <p><a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        
        <div className="contact-item">
          <h3>📍 العنوان</h3>
          <p>123 شارع المثال، المدينة، البلد</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
