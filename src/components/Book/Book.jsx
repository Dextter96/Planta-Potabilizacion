import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './Book.scss'


const Book = () => {
    return(
        <div className="flipbook">
            <HTMLFlipBook width={300} height={500} showCover={true}>
                <div className="page page-cover" data-density="hard">
                    <div className="page-content">
                        <h2>Titulo</h2>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header - 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">
                            <p>aqui va el cuerpo</p>
                        </div>
                        <div className="page-footer">1</div>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header - 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">
                            <p>aqui va el cuerpo</p>
                        </div>
                        <div className="page-footer">1</div>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header - 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">
                            <p>aqui va el cuerpo</p>
                        </div>
                        <div className="page-footer">1</div>
                    </div>
                </div>
            </HTMLFlipBook>
        </div>
    
    )
}

export default Book