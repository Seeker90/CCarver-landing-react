import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx"
import Jumbo from "./jumbo.jsx"
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<>
			<Navbar/>
			<main className="flex-grow-1">
				<Jumbo/>
				<Card/>
			</main>
			<Footer/>
			</>


		</div>
	);
};

export default Home;