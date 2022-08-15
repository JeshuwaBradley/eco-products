import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import PageImage from "../components/PageImage";
import Title from "../components/Title";
import ItemCard from "../components/ItemCard";
import { products } from "../constants";

const Products = () => {
	return (
		<div>
			<Navbar />
			<Title title={"Our Products"} />

			<div className="container">
				<div className="row justify-content-center">
					{products.map(({ title, desc, price, image }) => (
						<ItemCard
							title={title}
							desc={desc}
							price={price}
							image={image}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
