import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Page from '../Page/Page';
import Cover from '../Cover/Cover';
import './Book.scss'
import data from '../../assets/data/bookData';


const Book = () => {
    console.log(data);
    return(
        <div className="flipbook">
            <HTMLFlipBook width={450} height={650} maxShadowOpacity={0.5} drawShadow={true}>
                <Cover>Titulo</Cover>
                {data.map((_page, i) => (
                    <Page key={i} title={_page.title} number={i+1}>{_page.content}</Page>
                ))}
                <Cover>Final Libro</Cover>
            </HTMLFlipBook>
            
        </div>
    
    )
}

export default Book