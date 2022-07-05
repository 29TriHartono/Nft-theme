import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Market from '../pages/Market';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import SellerProfile from '../pages/SellerProfile';
import EditProfile from '../pages/EditProfile';
import Wallet from '../pages/Wallet';
import NftDetail from '../pages/NftDetail';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/market/:id" element={<NftDetail />} />
      </Routes>
    </>
  );
};

export default Routers;
