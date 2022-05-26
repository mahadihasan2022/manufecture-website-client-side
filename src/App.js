import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import auth from './firebase.init';
import AddReview from './Pages/AddReview/AddReview';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyProfile from './Pages/MyProfile/MyProfile';
import Purchase from './Pages/Purchase/Purchase';
import SingUp from './Pages/singUp/singUp';
import Summery from './Pages/Summery/Summery';
import ByeDetails from './Share/ByeDetails/ByeDetails';
import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';

export const UserDataProvider = createContext();

function App() {
  const [user, setUser] = useState({});
  // console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser({
              email:user?.email,
              name:user?.displayName
            });

            // console.log(user);
        } else {
            setUser({})
        }
    });
    return () => unsubscribe;
}, []);
console.log(user);
  return (
   <UserDataProvider.Provider value= {[user, setUser]} >
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/purchase" element={<Purchase></Purchase>}></Route>
       <Route path="/tools/:Id" element={<ByeDetails></ByeDetails>}></Route>
       <Route path="/summery" element={<Summery></Summery>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/MyPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path="/AddReview" element={<AddReview></AddReview>}></Route>
       <Route path="/MyProfile" element={<MyProfile></MyProfile>}></Route>
       <Route path="/Login" element={<Login></Login>}></Route>
       <Route path="/singUp" element={<SingUp></SingUp>}></Route>
     </Routes>
     <Footer></Footer>
    </UserDataProvider.Provider>
  );
}

export default App;
