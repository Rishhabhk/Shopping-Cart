import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
  

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
