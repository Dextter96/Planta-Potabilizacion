import React from "react";
import "./Footer.scss";

const Footer = () => {
   return (
      <div className="footer">
         <p>
            © todos los derechos reservados HideSoft Studios{" "}
            {new Date().getFullYear()}
         </p>
      </div>
   );
};

export default Footer;
