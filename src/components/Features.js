import React from "react";

import Feature from "./Feature";
import json from "../helpers/features";

export default function Features() {
  const featureList = json.feature.map((element, index) => {
    return (
      <Feature title={element.title} content={element.content} key={index} />
    );
  });

  return <section className="main__features">{featureList}</section>;
}
