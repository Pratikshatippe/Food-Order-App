import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import RestaurantCards from './Component/RestaurantCards';
function App() {
  return (
    <div className="container">
      <Header/>
      <RestaurantCards/>
    </div>
  );
}

export default App;
