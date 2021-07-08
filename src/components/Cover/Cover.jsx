import React from "react";
import "./Cover.scss";

const Cover = React.forwardRef((props, ref) => {
   return (
      <div className="cover" data-density="hard" ref={ref}>
         <div className="cover_content">
            <h2 className="cover_header">{props.children}</h2>
         </div>
      </div>
   );
});

export default Cover;
