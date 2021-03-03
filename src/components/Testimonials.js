import React from "react";

import Testimonial from "./Testimonial";
import json from "../helpers/testimonials";

export default function Testimonials() {
  const testimonialList = json.testimonial.map((element, index) => {
    let firstName = element.author.split(" ")[0].toLowerCase();
    let picture = `${firstName}.png`;

    return (
      <Testimonial
        picture={picture}
        author={element.author}
        content={element.content}
        key={index}
      />
    );
  });

  return <section className="main__testimonials">{testimonialList}</section>;
}
