import React from "react";
import "../css/app.css";

import Header from "./Header";
import DonationForm from "./DonationForm";
import CreatorList from "./CreatorList";

import { useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const logs = useSelector((state) => state.donationLogs); //donation record
  console.table(logs);

  return (
    <div className="app">
      <Header brand="Donation Tracker" />
      <div className="container">
        <Routes>
          <Route path="/" element={<CreatorList />} />
          <Route path="/donate/:id" element={<DonationForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
