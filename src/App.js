
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Services from './services';
import About from './about';
import Contact from './contact';
import Login from './login';
import NavBar from './nav';
import './project.css';
import SideBar from './sidebar';
import ContextProvider from './context';
import Profile from './profile';
import Setting from './setting';



function App() {
  
  return (
    <ContextProvider>
      <Router>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </Router>
      </ContextProvider>
  );
}

export default App;
