import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';

function App() {

  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services/:serviceId" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
