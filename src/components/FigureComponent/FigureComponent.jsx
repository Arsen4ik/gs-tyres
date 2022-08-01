import React from 'react';
// import  './FigureComponent.scss'

function FigureComponent(props) {
    return (
        <figure className="mainbanner">
            <img src='' alt="" />
            <figcaption>
                <h1>
                    <span className="slogan">{props.name}</span>{props.name2}
                </h1>
            </figcaption>
        </figure>
    );
}

export default FigureComponent;