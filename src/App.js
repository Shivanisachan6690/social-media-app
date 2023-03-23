
import './App.css';
import SignUp from './component/auth/SignUp';
import Login from './component/auth/Login';
import ForgotPassword from './component/auth/ForgotPassword';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Feed from './component/home/Feed';


function App() {
  return (
    <BrowserRouter> 
    <Routes>
<Route path='/'element = {<Login/>}/>
<Route path='/signup'element = {<SignUp/>}/>
<Route path='/forgot'element = {<ForgotPassword/>}/>
<Route path='/feed'element = {<Feed/>}/>

    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
