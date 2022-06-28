import React from "react";


const Paragraphs = ({ data,align }) => {
  return (
    <p
      className="textParagraph"
      style={{
        color: "#000000 60%",
        fontFamily: "Barlow",
        fontWeight: "300",
        fontSize: "20px",
        textAlign:align?"left":"center"
      }}
    >
      {data}
    </p>
  );
};

export default Paragraphs;
