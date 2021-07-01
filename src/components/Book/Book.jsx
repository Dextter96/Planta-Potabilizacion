import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Page from '../Page/Page';
import Cover from '../Cover/Cover';
import './Book.scss'


const Book = () => {
    return(
        <div className="flipbook">
            <HTMLFlipBook width={500} height={700} showCover={true} maxShadowOpacity={0.5}>
                <Cover>Titulo</Cover>
                <Page title={'Titulo 1'} number={1}> Este es el texto children</Page>
                <Page title={'Titulo Johansito'} number={2}>Esta va ser la pagina dedicada a johansito</Page>
                <Page title={'Titulo Ratica'} number={3}>Esta va ser la pagina dedicada al ratica</Page>
                <Page title={'Titulo Gordito'} number={4}>Esta va ser la pagina dedicada al gordi</Page>
                <Page title={'Titulo para mi'} number={5}>Esta va ser la pagina dedicada para el mas aspero de este grupo</Page>
                <Page title={'Este es mi nuevo titulo'} number={125}> 1. Capitulo 1 detalles de algo</Page>
                <Cover>Final Libro</Cover>
            </HTMLFlipBook>
        </div>
    
    )
}

export default Book