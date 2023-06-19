import logo from './logo.png';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/navigation/Nav';
import About from './pages/about/about';
import Home from './pages/Home/home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
