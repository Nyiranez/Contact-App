
import './App.css';
import { Header } from './comonents/header';
import { Home } from './pages/home';
import { Login } from './pages/login';
import {Update} from './pages/update'
import { Newupdate } from './pages/newupdate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Login/>}></Route>
      <Route path="/home" element={ <Home/>}></Route>
      <Route path="/update" element={ <Update/>}></Route>
      <Route path="/newupdate" element={ < Newupdate/>}></Route>
      </Routes>
      </BrowserRouter>
  
  
    </div>
  );
}

export default App;
