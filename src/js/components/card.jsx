import React from "react";
import cardImage from"../../img/big-project-image.png"

const card = () => {
	return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex justify-content-between">
                    <div className="card" {{style=width: "18rem;"}}>
                        <img src={cardImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis nisi quis sapien bibendum, at cursus nisi imperdiet. Fusce et nisl nec sem interdum fringilla. Nunc eu velit non augue bibendum venenatis.</p>
                            <a href="#" className="btn btn-primary">Find out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        
        </>
    );
};

export default card;
