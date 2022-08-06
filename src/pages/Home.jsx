import React from "react";
import AboutUs from "../components/AboutUs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testomonial from "../components/Testomonial";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Carousel />
			<AboutUs />
			<Testomonial />
			<Footer />
		</div>
	);
};

export default Home;
