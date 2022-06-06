import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';
const auth = getAuth(app);


function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
