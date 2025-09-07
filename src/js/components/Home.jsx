import React from "react";
import Card from "./card.jsx"
import Jumbo from "./jumbo.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
          <>
		  <Nav/>
		  <Jumbo/>
		  <Card/>

		  
		  
		  </>


		</div>
	);
};

export default Home;