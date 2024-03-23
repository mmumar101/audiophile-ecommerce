import './index.css';
import Home from './Pages/Home';
import Earphones from './Pages/Eaphones';
import Headphones from './Pages/Headphones';
import Speakers from './Pages/Speakers';
// import Header from './Components/Header';
// import Body from './Components/Body';
import Footer from './Components/Footer';
// import RootLayout from './Components/RootLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route index element={<Home />} />
      <Route path='earphones' element={<Earphones />} />
      <Route path='headphones' element={<Headphones />} />
      <Route path='speakers' element={<Speakers />} />
     </Route>
    )
  )

  return (
    <div className="bg-white w-full mx-auto">
    {/* <Header /> */}
     <RouterProvider router={router} />
     <Footer />
    </div>
    
  );
}

export default App;
