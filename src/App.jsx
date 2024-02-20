
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Foouter/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Loader from './components/Loder/Loader';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
    return (
    <div className="App">

    <Header/>
    <Routes>

      <Route path='/'element={<Home loading={{loading, setLoading}}/>}/>      
      <Route path='/about'element={<About/>}/>
      <Route path='/product-detail/:id' element={<ProductDetail loading={{loading, setLoading}}/>}/>      

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
