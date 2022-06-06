import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Athentivcation/Login/Login';
import Register from './Athentivcation/Register/Register';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
