import React from "react";

const Jumbo = () => {
    return (
        <>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="jumbotron" style={{backgroundColor:"lightgrey", padding:"1rem", marginBottom:"20px"}}>
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet. Ut minus dolores vel alias accusamus sed mollitia sunt! Aut molestiae veniam ea cumque dolor hic galisum consequatur aut internos sint ea quidem repellendus eum maiores molestiae qui quia enim.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
                    </p>
                </div> 
            </div>
            <div className="col-1"></div>
        </div>
        </>
    );
};

export default Jumbo;
