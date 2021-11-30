import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
