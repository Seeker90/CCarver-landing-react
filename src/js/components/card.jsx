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
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 d-flex justify-content-between">
                    {cards.map((card, index) => (
                        <div className="card-img" style={{ width: "10rem"}} key={index}>
                            <img src={card.img} className={card.name} alt={card.title} style={{width: "10rem"}}/>
                            <div className="card-body">
                                <h5>{card.title}</h5>
                                <p>{card.text}</p>
                                <a href="#" className="btn btn-primary">Find out More!</a>
                            </div>
                        </div>
                    ))}
                  </div>
                <div className="col-1"></div>
            </div>
        </>
    );
};

export default Card;
