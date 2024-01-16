import './App.css';
import Footer from './include/Footer';
import Header from './include/Header';
import MainPage from './main';
import Audio from './subweb/audio';
import Gear from './subweb/gear';
import Buy from './cart/buy';
import Console from './subweb/console';
import Mouse from './subweb/mouse';
import Keyboard from './subweb/keyboard'
import Clothes from './subweb/clothes';
import ProductPage from './product';
import { Routes, Route } from 'react-router-dom';
import Uploadpage from './upload';
import Cart from "./cart"
import Login from './icon/login';
import Register from './icon/register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/audio" element={<Audio/>}/>
        <Route path="/gear" element={<Gear/>}/>
        <Route path="/console" element={<Console/>}/>
        <Route path="/mouse" element={<Mouse/>}/>
        <Route path="/clothes" element={<Clothes/>}/>
        <Route path="/keyboard" element={<Keyboard/>}/>
        <Route path="/:category/:id" element={<ProductPage/>}/>
        <Route path="/upload" element={<Uploadpage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
