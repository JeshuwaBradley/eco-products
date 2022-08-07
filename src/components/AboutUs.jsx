import React from "react";

const AboutUs = () => {
	return (
		<div className="container text-center py-5">
			<div className="row py-5">
				<div className="col-lg-6 col-sm-12 px-5">
					<div className="col mb-4">
						<u>
							<p className="h1 fs-1">About Us</p>
						</u>
					</div>
					<p className="aboutUs-text fs-5">
						<img
							draggable="false"
							role="img"
							className="emoji"
							alt=""
							style={{ fontWeight: "normal", height: "1.5rem" }}
							src="https://s.w.org/images/core/emoji/14.0.0/svg/1f1f1-1f1f0.svg"
						/>
						🌍👣 “made in Sri Lanka with Eco Products Our vision is
						Explore the Earth ” & passion on solo traveling & wild
						life & Story telling.
					</p>
					<p className="aboutUs-text fs-5">
						madebysrilankan is dedicated Srilankan professional
						service oriented team ,where OUR team #working4your
						global requests via (REQUEST ANYTHING TO US) Contact
						Form on our website. Request to Anything to us via
						madebysrilankan.com, we will attend & do the needful
						either it’s (Product or Service) any request.
					</p>
					<p className="aboutUs-text fs-5">
						Empowering Sri Lankan small medium entrepreneurs
						community & open door gate to global market.
					</p>
				</div>
				<div className="col-lg-6 col-sm-12">
					<div className="aboutUs-container">
						<span>
							<img
								src="images/heshan-weeramanthri-ytNk5s_4Wys-unsplash.jpg"
								alt=""
							/>
						</span>
						<span>
							<img
								src="images/thushal-madhushankha-9eXvKZXMb6U-unsplash.jpg"
								alt=""
							/>
						</span>
						<span>
							<img
								src="images/mohammed-ajwad-JY0Zr59XvHg-unsplash.jpg"
								alt=""
							/>
						</span>
						{/* <span></span>
						<span></span> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
