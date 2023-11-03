import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Breeds from '../pages/Breeds';
import Favourites from '../pages/Favorites';
import Photos from '../pages/Photos';
import Gallery from '../pages/Gallery';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/breeds" element={<Breeds />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
