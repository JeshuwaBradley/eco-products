import React from "react";

const Carousel = () => {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="true"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="images/hendrik-cornelissen-jpTT_SAU034-unsplash.jpg"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="images/jaromir-kavan-i9eaAR4dWi8-unsplash.jpg"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="images/daria-dyachenko-D-TI9Zww3O0-unsplash.jpg"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="images/egle-sidaraviciute-pv-2hRmoJRU-unsplash.jpg"
						className="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
			{/* <button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button> */}
		</div>
	);
};

export default Carousel;
