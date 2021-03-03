import React from "react";

export default function Testimonial(props) {
  return (
    <article className="testimonials__element">
      <figure>
        <img src={props.picture} alt="user" />
      </figure>

      <blockquote className="testimonials__quote">
        <p>{props.content}</p>
        <p className="quote__author">~ {props.author}</p>
      </blockquote>
    </article>
  );
}
