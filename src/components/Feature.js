import React from "react";

export default function Feature(props) {
  return (
    <article className="features__element">
      <h2 className="main__title">× {props.title}</h2>
      <p>{props.content}</p>
    </article>
  );
}
