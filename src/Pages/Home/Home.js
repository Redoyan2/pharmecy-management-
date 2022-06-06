import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../Athentivcation/Login/Login';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
           <Routes>
               <Route path='/login' element={<Login></Login>}></Route>
           </Routes>
            
        </div>
    );
};

export default Home;