import React, { useState, useEffect } from "react";
import "./Cover.scss";

const Cover = React.forwardRef((props, ref) => {
   const [dataBook, setDataBook] = useState({});
   const { book, data } = props;
   // console.log(book.current.pageFlip().getPageCount());

   console.log(data);

   useEffect(() => {
      const title = data.find((page) => page.title !== "");

      setDataBook({
         title: title.title,
      });
   }, []);

   console.log(dataBook);

   // setNumberPage(book.current.pageFlip().getPageCount());

   return (
      <div className="cover" data-density="hard" ref={ref}>
         <div className="cover_content">
            <h2 className="cover_header">Paginas: {data.length}</h2>
         </div>
      </div>
   );
});

export default Cover;
