import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navbar } from "react-bootstrap";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div id="app">
      <Header />
      <main id="content" className="container"></main>
      <Footer />
    </div>
  );
}
