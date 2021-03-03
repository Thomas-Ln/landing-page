import React from "react";
import "../styles/main.css";

import Presentation from "./Presentation";
import Gallery from "./Gallery";
import Features from "./Features";
import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <main className="main">
      <Presentation />
      <Gallery />
      <Features />
      <Testimonials />
    </main>
  );
}
