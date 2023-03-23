import './App.css';
import { BrowserRouter ,Routes, Route, Link, Navigate } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SellerPage from './pages/SellerPage';
import SubscribersPage from './pages/SubscribersPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/Home" element={<Homepage />} />
      <Route path="/Contact" element={<ContactPage/>} />
      <Route path="/Sellers" element={<SellerPage />} />
      <Route path="/Subscribers" element={<SubscribersPage />} />
      <Route path="/Login" element={<Navigate to="/Home" />} />
      <Route path="/Cart" element={<Navigate to="/Home" />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
