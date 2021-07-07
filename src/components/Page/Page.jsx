import React from 'react';
import './Page.scss'

const Page = React.forwardRef((props, ref) => {
    const {content, title, number} = props;

    const showContent = () => {
        if(content) {
            const values = Object.values(content);
            const keys = Object.keys(content);

            return values.map((page, i) => {
                let element;
                switch(keys[i].split('_')[0]) {
                    case 'subtitle':
                        element = <h3 key={i}>{values[i]}</h3>
                        break;
                    case 'image':
                        element = <img key={i} src={`/assets/images/${values[i]}`} alt=""/>
                    break;
                    case 'text':
                        element = <p key={i} >{values[i]}</p>
                    break;
                    case 'list':
                        element = <ul key={i}>
                            {values[i].map((page,j) =>{ return <li key={j}>{values[i][j]}</li>})}
                        </ul>
                    break;
                    default:
                        element = <></>
                }
                return element;
            })            
        }

        return <></>;
    }

    return(
        <div className="page" ref={ref}>
            <div className="page_content">
                <h2 className="page_title">{title}</h2>
                <div className="page_content">
                    {showContent()}
                </div>
                <div className="page_footer">{number}</div>
            </div>
        </div>
    );
    
});

export default Page


