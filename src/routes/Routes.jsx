import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/breeds"></Route>
        <Route path="/favourites"></Route>
        <Route path="/photos"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
