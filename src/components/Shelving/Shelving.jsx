import React from "react";
import { Link } from "react-router-dom";
import "./Shelving.scss";

const Shelving = () => {
   const renderCaps = () => {
      let cards = [];

      for (let i = 1; i <= 16; i++) {
         cards.push(
            <Link to={`/book/${i}`} className="view_chapter" key={i}>
               <img src={`/images/covers/cp${i}.jpg`} alt="" />
               <p>
                  Capitulo <span>{i}</span>
               </p>
            </Link>
         );
      }

      return cards;
   };

   return <div className="contenedor">{renderCaps()}</div>;
};

export default Shelving;
