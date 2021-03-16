import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" id="header">
      <h1 className="font-weight-bold">Library</h1>
    </Navbar>
  );
}
