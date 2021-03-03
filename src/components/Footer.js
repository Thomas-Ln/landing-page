import React from "react";
import "../styles/footer.css";

export default function Footer() {
  const networks = ["twitter", "facebook", "reddit", "linkedin"];
  const networkList = networks.map((element, index) => {
    return (
      <li className="social-networks__element" key={index}>
        <a href="#">
          <i className={`fab fa-${element}`}></i>
        </a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © Landing-Page {new Date().getFullYear()}
      </p>
      <ul className="footer__social-networks">{networkList}</ul>
    </footer>
  );
}
