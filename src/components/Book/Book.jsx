import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Page/Page";
import Cover from "../Cover/Cover";
import "./Book.scss";
import data from "../../assets/data/bookData";

const Book = () => {
   const book = useRef();

   useEffect(() => {
      data.sort(function (a, b) {
         if (a.chapter === b.chapter) {
            return a.page - b.page;
         }
         return a.chapter > b.chapter ? 1 : -1;
      });
   });

   return (
      <div className="flipbook">
         <HTMLFlipBook
            width={600}
            height={800}
            maxShadowOpacity={0.5}
            drawShadow={true}
            ref={book}
         >
            <Cover book={book} data={data} />
            {data.map((_page, i) => (
               <Page
                  key={i}
                  title={_page.title}
                  number={i + 1}
                  content={_page.content}
               />
            ))}
            {/* <Cover>Final Libro</Cover> */}
         </HTMLFlipBook>
      </div>
   );
};

export default Book;
