import React from "react";

const Hero = () => {
    return (
        <>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
            <div className="px-4 py-5 my-5 " style={{backgroundColor:"lightgrey", padding:"1rem", marginBottom:"20px"}}>
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <div className=" mx-auto">
                    <p className="lead mb-4">Lorem ipsum dolor sit amet. Ut minus dolores vel alias accusamus sed mollitia sunt! Aut molestiae veniam ea cumque dolor hic galisum consequatur aut internos sint ea quidem repellendus eum maiores molestiae qui quia enim.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Call to Action!</button>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </>
    );
};

  export default Hero;