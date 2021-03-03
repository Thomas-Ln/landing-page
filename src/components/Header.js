import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        className="landing-logo"
        src="landing.svg"
        title="Landing Page"
        alt="logo"
      />
      <h1 className="header__title">LANDING PAGE</h1>
    </header>
  );
}
