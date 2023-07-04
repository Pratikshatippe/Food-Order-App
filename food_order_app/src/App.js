import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import RestaurantCards from './Component/RestaurantCards';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Error from './pages/Error';
import Header from './Component/Header';
import RestaurantMenu from './pages/RestaurantMenu';
import { Suspense, lazy, useState } from 'react';
import UserContext from './Store/UserContext';
//import Grocery from './pages/Grocery';

//lazy loading/code splitting/on demand loading/dynamic import/chunking

const Grocery = lazy(()=>import("./pages/Grocery"));

function App() {
  const [user, setUser] = useState({
    user:{
      name:"Pratiksha Tippe",
      email:"pratikshatippe@gmail.com"
    }
  })
  return (
    <div>
      <UserContext.Provider value={user}>
      <Header/>
      <Routes>
        <Route path="/" element={<RestaurantCards/>} errorElement={<Error/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>}/>
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
