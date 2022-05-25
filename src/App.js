import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import SingUp from './Pages/singUp/singUp';
import Header from './Share/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="purchase" element={<Purchase></Purchase>}></Route>
       <Route path="/Login" element={<Login></Login>}></Route>
       <Route path="/singUp" element={<SingUp></SingUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
