import React from "react";

const Headings = ({ title ,align}) => {
  return (
    <h2
      className="headingTitle"
      style={{
        color: "#373737",
        fontFamily: "Barlow",
        fontWeight: "700",
        fontSize: "32px",
        textAlign:align?"left":"center"
      }}
    >
      {title}
    </h2>
  );
};

export default Headings;
