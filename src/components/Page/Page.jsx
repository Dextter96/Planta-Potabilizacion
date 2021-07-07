import React from 'react';
import './Page.scss'

const Page = React.forwardRef((props, ref) => {
    const {content} = props;

    const showText = () => {
        if(content) {
            const values = Object.values(content);
            const keys = Object.keys(content);

            return values.map((page, i) => {
                let element;
                switch(keys[i].split('_')[0]) {
                    case 'subtitle':
                        element = <h3 key={values[i]}>{values[i]}</h3>
                        break;
                    case 'image':
                        element = <img key={values[i]} src={`/assets/images/${values[i]}`} />
                    break;
                    case 'text':
                        element = <p key={values[i]} >{values[i]}</p>
                    break;
                    case 'list':
                        element = <ul key={values[i]}>
                            {values[i].map((page,j) =>{ return <li>{values[i][j]}</li>})}
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
                <h2 className="page_title">{props.title}</h2>
                <div className="page_text">
                    {showText()}
                </div>
                <div className="page_footer">{props.number}</div>
            </div>
        </div>
    );
    
});

export default Page


