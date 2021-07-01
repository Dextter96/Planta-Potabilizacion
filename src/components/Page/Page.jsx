import React from 'react';
import './Page.scss'

const Page = React.forwardRef((props, ref) => {
    return(
        <div className="page" ref={ref}>
            <div className="page_content">
                <h2 className="page_title">{props.title}</h2>
                <div className="page_text">
                    <p>{props.children}</p>
                </div>
                <div className="page_footer">{props.number}</div>
            </div>
        </div>
    );
    
});

export default Page


