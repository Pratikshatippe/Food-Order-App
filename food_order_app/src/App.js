import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import RestaurantCards from './Component/RestaurantCards';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Error from './pages/Error';
import Header from './Component/Header';
import RestaurantMenu from './pages/RestaurantMenu';
function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<RestaurantCards/>} errorElement={<Error/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
