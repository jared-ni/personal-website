import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
        
    </>

  );
}

export default App;
