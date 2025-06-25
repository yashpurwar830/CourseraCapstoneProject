import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import About from "./components/About";
import ConfirmedBooking from "./components/ConfirmedBooking";
import useBooking from "./hooks/useBooking";
import { submitAPI } from "./utils/bookingUtils";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

function App() {
  const [state, dispatch] = useBooking();
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
