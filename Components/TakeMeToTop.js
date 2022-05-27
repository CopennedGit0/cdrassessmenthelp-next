import React from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TakeMeToTop = ({ scrollToTop }) => {
  return (
    <div className="position-fixed takeMeToTopContainer" onClick={scrollToTop}>
      
      <div className="bg-white px-2 py-1" style={{ color: "#5B2397" }}>
        <ExpandLessIcon/>
      </div>
    </div>
  );
};

export default TakeMeToTop;
