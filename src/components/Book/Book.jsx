import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Page from '../Page/Page';
import Cover from '../Cover/Cover';
import './Book.scss'


const Book = () => {
    return(
        <div className="flipbook">
            <HTMLFlipBook width={600} height={800} showCover={true} maxShadowOpacity={0.5}>
                <Cover>Titulo</Cover>
                <Page title={'Titulo 1'} number={1}> La conservación de la cuenca hidrográfica con la consiguiente protección de los manantiales suelen ser el mejor método para asegurar la calidad del agua destinada a consumo humano. Para impedir los riesgos de polución y contaminación por el ser humano y los animales deben ser evitados los lanzamientos de residuos líquidos que contengan organismos patógenos o  disminuir el desarrollo de actividades agrícolas que exijan el empleo de agroquímicos que contengan elementos tóxicos, o de fertilizantes que contengan nutrientes, los cuales son llevados a los cursos de agua por escurrimiento superficial o sub-superficial, causando florecimientos de algas y otros inconvenientes para la operación del sistema de tratamiento. Como consecuencia, son exigidas técnicas de tratamiento sofisticadas para los países en desarrollo, como el uso de agentes oxidantes, como pergamanato de potasio, ozono, peróxido de hidrógeno, de carbón activado para la adsorción de compuestos orgánicos específicos, etc. que encarecen los costos de tratamiento.</Page>
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