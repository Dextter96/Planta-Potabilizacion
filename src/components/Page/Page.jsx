import React from 'react';
import '../Book/Book.scss'

const Page = React.forwardRef((props, ref) => {
    return(
        <div className="page" ref={ref}>
            <div className="page_content">
                <h2 className="page_title">{props.title}</h2>
                <div className="page_text"> {props.children}</div>
                <div className="page_footer">{props.number}</div>
            </div>
        </div>
    );
    
});

export default Page

