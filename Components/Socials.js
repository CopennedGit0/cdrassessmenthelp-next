import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socials = () => {
  return (
    <div className="position-fixed socialContainer">
      <div className=" d-flex flex-column">
        <a
          href="https://www.facebook.com/cdrassessmenthelp001"
          target="_blank"
          rel="noreferrer"
          className=" iconContainer"
          style={{}}
        >
          <FacebookOutlinedIcon/>
        </a>
        <div
          className="bg-white mt-3 iconContainer"
          onClick={() => window.open("mailto:info@cdrforengineer.com")}
        >
                    <EmailOutlinedIcon/>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=61482072481"
          target="_black"
          rel="noreferrer"
          className="bg-white mt-3 iconContainer"
        >
          <WhatsAppIcon style={{color:"#60269e"}}/>
        </a>
      </div>
    </div>
  );
};

export default Socials;
