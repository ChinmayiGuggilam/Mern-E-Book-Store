import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import HomePage from './components/HomePage';  // Assuming HomePage is your Home component
import Cart from './components/Cart';
import Payment from './components/PaymentPage';
import MainPage from './components/MainPage';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import AboutUs from './context/AboutUs';
import ContactUs from './context/ContactUs';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* This will render HomePage at the root */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
