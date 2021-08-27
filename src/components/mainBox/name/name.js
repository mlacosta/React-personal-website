import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "./name.css";
import "react-typist/dist/Typist.css";

function Name({ colors, width }) {
  const myName = width > 700 ? "Mariano L. Acosta " : "Mariano Acosta ";
  const firstTitle = "Software Developer";
  const secondTitle = "Electronics Engineer ";

  let nameStyle = {
    color: colors.text01,
  };
  let titleStyle = {
    color: colors.text02,
    fontWeight: "300",
  };

  let delay1 = 1000;
  let delay2 = 1500 + delay1;
  let delay3 = delay2 + 1500;

  return (
    <div className="Name">
      <h1 id="myName" style={nameStyle}>
        <Typist cursor={{ element: " █", hideWhenDone: true }}>
          <Typist.Delay ms={delay1} />
          {myName}
        </Typist>
      </h1>
      <div id="profession">
        <h2 style={titleStyle}>
          <Typist cursor={{ element: " █", hideWhenDone: true }}>
            <Typist.Delay ms={delay2} />
            {firstTitle}
          </Typist>
        </h2>
        <h2 style={titleStyle}>
          <Typist cursor={{ element: " █", hideWhenDone: true }}>
            <Typist.Delay ms={delay3} />
            {secondTitle}
          </Typist>
        </h2>
      </div>
      <br />
      <br />
      <br />
      <h3 id="myName" style={nameStyle}>
        <Typist cursor={{ element: " █", blink: true }}>
          <Typist.Delay ms={delay3 + 600 + 1000} />
          {"Press any key to continue: "}
        </Typist>
      </h3>
    </div>
  );
}

export default Name;
