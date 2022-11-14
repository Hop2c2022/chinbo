import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import "../App.css";
export const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
