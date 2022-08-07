import React from "react";

const Testomonial = () => {
	return (
		<div className="carousel-container">
			<div className="col text-center testimonial-heading">
				{/* <u> */}
				<p className="h1 fs-1 testimonial-header">
					See What Our Customers Are Saying
				</p>
				{/* </u> */}
			</div>
			<div
				id="carouselExampleControls"
				className="carousel carousel-dark slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner testomonial-carousel">
					<div className="carousel-item active">
						<div className="text-center testomonial d-flex justify-content-center align-items-center flex-column">
							<span className="quote-icon">
								<svg
									aria-hidden="true"
									focusable="false"
									role="presentation"
									className="icon icon-quote"
									viewBox="0 0 41 35"
								>
									<path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
								</svg>
							</span>
							<p className="text-center text-wrap">
								Curabitur malesuada lacus at purus pharetra,
								vitae egestas augue blandit. Duis feugiat
								vestibulum turpis, malesuada volutpat augue
								aliquet at. Vivamus egestas urna id eros
								tincidunt, in dictum enim tincidunt.
							</p>
							<p className="text-center">
								<strong>Bucky Barnes</strong>
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="text-center testomonial d-flex justify-content-center align-items-center flex-column">
							<span className="quote-icon">
								<svg
									aria-hidden="true"
									focusable="false"
									role="presentation"
									className="icon icon-quote"
									viewBox="0 0 41 35"
								>
									<path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
								</svg>
							</span>
							<p className="text-center text-wrap">
								Curabitur malesuada lacus at purus pharetra,
								vitae egestas augue blandit. Duis feugiat
								vestibulum turpis, malesuada volutpat augue
								aliquet at. Vivamus egestas urna id eros
								tincidunt, in dictum enim tincidunt.
							</p>
							<p className="text-center">
								<strong>Bucky Barnes</strong>
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="text-center testomonial d-flex justify-content-center align-items-center flex-column">
							<span className="quote-icon">
								<svg
									aria-hidden="true"
									focusable="false"
									role="presentation"
									className="icon icon-quote"
									viewBox="0 0 41 35"
								>
									<path d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"></path>
								</svg>
							</span>
							<p className="text-center text-wrap">
								Curabitur malesuada lacus at purus pharetra,
								vitae egestas augue blandit. Duis feugiat
								vestibulum turpis, malesuada volutpat augue
								aliquet at. Vivamus egestas urna id eros
								tincidunt, in dictum enim tincidunt.
							</p>
							<p className="text-center">
								<strong>Bucky Barnes</strong>
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleDark"
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
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Testomonial;
