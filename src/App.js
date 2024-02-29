// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { Login } from './components/login';
import { Logout } from './components/logout';



function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route exact path="/google" element={<SocialAuth />} /> */}
        <Route path='/logout' element={<Logout/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
