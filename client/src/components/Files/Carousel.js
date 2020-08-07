import React, { useState } from 'react';
import "../Style/carousel.css";
import ImagesCar from "../Files/ImagesCar";
import pic1 from "../Files/projectpics/pic1.jpg";
import pic2 from "../Files/projectpics/pic2.jpg";
import pic3 from "../Files/projectpics/pic3.jpg";
import pic4 from "../Files/projectpics/pic4.jpg";
import pic5 from "../Files/projectpics/pic5.jpeg";
import pic6 from "../Files/projectpics/pic7.jpg";







function Carousel() {
    let carouselArray = [
        <ImagesCar className= "imgCar" src={pic1} />,
        <ImagesCar src={pic2} />,
        <ImagesCar src={pic3} />,
        <ImagesCar src={pic4} />,
        <ImagesCar src={pic5} />,
        <ImagesCar src={pic6} />,

    ];
    const [x, setX] = useState(0);
    const scrollLeft = () => {
        x === 0 ? setX(-100 * (carouselArray.length - 1)) : setX(x + 100);
    };
    const scrollRight = () => {
        x === -100 * (carouselArray.length - 1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="carousel">
            {
                carouselArray.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="scrollLeft" onClick={scrollLeft}><i className="fi-xnllxl-chevron"></i></button>
            <button id="scrollRight" onClick={scrollRight}><i className="fi-xnlrxl-chevron"></i></button>

        </div>
    )
}

export default Carousel