import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from './screens/productDetails';
import Home from './screens/home';
import Profile from './screens/profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-details/:id" element={<ProductDetails />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
