import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Navbar } from "react-bootstrap";
import { Code, GitHub, Linkedin } from "react-feather";

export default function App() {
  return (
    <div id="app">
      <Navbar bg="primary" variant="dark" id="header">
        <h1 className="font-weight-bold">Library</h1>
      </Navbar>
      <main id="content" className="container"></main>
      <footer id="footer" className="container-fluid">
        <div
          id="footer-links"
          className="row justify-content-center align-items-center h-100"
        >
          <a href="#!" className="col-3 btn btn-primary mx-2">
            <GitHub />
          </a>
          <a href="#!" className="col-3 btn btn-primary mx-2">
            <Linkedin />
          </a>
          <a href="#!" className="col-3 btn btn-primary mx-2">
            <Code />
          </a>
        </div>
      </footer>
    </div>
  );
}
