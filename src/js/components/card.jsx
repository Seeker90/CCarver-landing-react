import React from "react";
import cardImage from"../../img/big-project-image.png"

const Card = () => {
	const cards = [
        {   name:"Card1",
            title: "Card Title", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: cardImage,
        },
         {  name:"Card2",
            title: "Card Title", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: cardImage,
        },
         {  name:"Card3",
            title: "Card Title", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: cardImage,
        },
         {  name:"Card4",
            title: "Card Title", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: cardImage,
        },
    ];
    
    return (
        <div className="container mb-4 justify-content-center">
        <div className="row g-3">
            {cards.map((card, index) => (
            <div className="col-10 col-sm-6 col-md-3" key={index}>
                <div className="card h-100">
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <a href="#" className="btn btn-primary">Find out More!</a>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Card;
