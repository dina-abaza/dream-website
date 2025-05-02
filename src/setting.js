import React, { useContext, useState ,useEffect} from 'react';
import { CountContext } from './context';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Settings() {
  const { t, i18n } = useTranslation();

    const {setCurrentUser,currentUser}=useContext(CountContext)
const navigate=useNavigate();
  const [email, setEmail] = useState(currentUser?.email||'');
  const [password, setPassword] = useState(currentUser?.password||'');
  const [language, setLanguage] = useState('ar');


  const handleSave = () => {
    const updateUser={email,password,language};
    setCurrentUser(updateUser);
navigate('/profile')
  };
  useEffect(() => {
    i18n.changeLanguage(language); // تغير اللغة فورًا عند الاختيار
  }, [language]);



  return (
    <div className="setting-page">
      <h1>{t('settings')}</h1>


      <div className="setting-item">
       
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('email_placeholder')}
        />
         <label>{t('change_email')}</label>
      </div>

      <div className="setting-item">
       
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('password_placeholder')}
        />
         <label>{t('change_password')}</label>
      </div>

      <div className="setting-item">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ar">{t('arabic')}</option>
          <option value="en">{t('english')}</option>
        </select>
        <label>{t('language')}</label>

      </div>


      <div className="setting-item">
        <button onClick={handleSave}>{t('save_changes')}</button>
      </div>
    </div>
  );
}
