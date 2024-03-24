import './index.css';
import Home from './Pages/Home';
import Earphones from './Pages/Eaphones';
import Headphones from './Pages/Headphones';
import Speakers from './Pages/Speakers';
import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import Body from './Components/Body';
import Footer from './Components/Footer';
// import RootLayout from './Components/RootLayout';
import { Route, Routes } from 'react-router-dom';

function App() {



  return (
    <div className="bg-white w-full mx-auto">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='earphones' element={<Earphones />} />
      <Route path='headphones' element={<Headphones />} />
      <Route path='speakers' element={<Speakers />} />
     </Routes>
     <Footer />
    </div>
    
  );
}

export default App;
