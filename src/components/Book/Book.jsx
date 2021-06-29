import React, {useEffect} from "react";
import $ from 'jquery';

const Book = () => {
    const loadApp = () => {
        $('.flipbook').turn({
			// Width
			width:922,
			// Height
			height:600,
			// Elevation
			elevation: 50,
			// Enable gradients
			gradients: true,
			// Auto center this flipbook
			autoCenter: true

	    });
    }

    useEffect(() => {
        yepnope({
            test : modernizr.csstransforms,
            yep: ['/turnjs4/lib/turn.js'],
            nope: ['/turnjs4/lib/turn.html4.min.js'],
            both: ['/basic.css'],
            complete: loadApp
        });
    }, []);

    return (
        <div className="flipbook-viewport">
            <div className="container">
                <div className="flipbook">
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis vero adipisci laboriosam, commodi natus accusantium. Ullam cumque autem modi delectus?</div>
                </div>
            </div>
        </div>
    )
}

export default Book;