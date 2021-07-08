import React from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { withRouter } from "react-router-dom";

const Layout = withRouter(({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
});

export default Layout;
