import React from "react";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./Book.scss";

const Book = (props) => {
   const { cap } = props.match.params;
   const defaultLayoutPluginInstance = defaultLayoutPlugin();

   return (
      <div className="pdf-container">
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer
               fileUrl={`/assets/book/cap${cap}.pdf`}
               plugins={[defaultLayoutPluginInstance]}
            />
         </Worker>
      </div>
   );
};

export default Book;
