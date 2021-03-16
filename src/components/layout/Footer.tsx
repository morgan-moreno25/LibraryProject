import { GitHub, Linkedin, Code } from "react-feather";

export default function Footer() {
  return (
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
  );
}
