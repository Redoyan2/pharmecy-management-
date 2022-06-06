import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import Home from './Pages/Home/Home';
const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
