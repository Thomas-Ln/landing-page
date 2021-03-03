import React from "react";

export default function Presentation() {
  return (
    <section className="main__presentation">
      <article>
        <h2 className="main__title">
          Completely synergize resource taxing relationships
        </h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
        </p>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution.
        </p>
        <button className="presentation__call-to-action">CALL TO ACTION</button>
      </article>

      <iframe
        title="landing plane video"
        className="presentation__video"
        src="https://player.vimeo.com/video/312895181?title=0&portrait=0&byline=0&autoplay=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
