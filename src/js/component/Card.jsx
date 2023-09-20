import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const CardProps = (props) => {
    return (<div className="col">
                <div className="card h-100" style= {{width: "18rem"}}>
                    <img src={props.img} className="card-img-top" alt="kaka"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-footer text-center">
                        <Button url={props.buttonUrl} className={props.buttonClass} label={props.buttonLabel}/>
                    </div>
                </div>
            </div>);
};

CardProps.propTypes = {
    img: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
    buttonUrl: propTypes.string,
    buttonLabel: propTypes.string,
    buttonClass: propTypes.string
}



const Card = () => {
    return (<div className="row mb-4">
                <CardProps img="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg" title="Card Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonUrl="#" buttonLabel="Find out more!" buttonClass="btn btn-primary"/>
                <CardProps img="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg" title="Card Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." buttonUrl="#" buttonLabel="Find out more!" buttonClass="btn btn-primary"/>
                <CardProps img="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg" title="Card Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." buttonUrl="#" buttonLabel="Find out more!" buttonClass="btn btn-primary"/>
                <CardProps img="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg" title="Card Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." buttonUrl="#" buttonLabel="Find out more!" buttonClass="btn btn-primary"/>
            </div>);
}

export default Card;