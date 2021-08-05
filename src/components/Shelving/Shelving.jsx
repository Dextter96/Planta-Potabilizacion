import React from "react";
import "./Shelving.scss";

const Shelving = () => {
   const renderCaps = () => {
      let cards = [];

      for (let i = 1; i <= 16; i++) {
         cards.push(
            <div className="view_chapter" key={i}>
               <img src={`/images/covers/cp${i}.jpg`} alt="" />
               <p>
                  Capitulo <span>{i}</span>
               </p>
            </div>
         );
      }

      return cards;
   };

   return <div className="contenedor">{renderCaps()}</div>;
};

export default Shelving;
