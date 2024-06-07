import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Breeds from '../pages/Breeds';
import Favourites from '../pages/Favorites';
import Photos from '../pages/Photos';
import Gallery from '../pages/Gallery';

function AllRoutes() {
  return (
    <Router basename="/fetchapeei">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
