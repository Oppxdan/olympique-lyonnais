import logo from './logo.png';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/navigation/Nav';
import About from './pages/about/about';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="Page">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
