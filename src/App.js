import './index.css';
import Home from './Pages/Home';
import Earphones from './Pages/Eaphones';
import Headphones from './Pages/Headphones';
import Speakers from './Pages/Speakers';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-white w-full mx-auto">
     <Routes>
        <Route index element={<Home />} />
        <Route path='earphones' element={<Earphones />} />
        <Route path='headphones' element={<Headphones />} />
        <Route path='speakers' element={<Speakers />} />
     </Routes>
    </div>
  );
}

export default App;
