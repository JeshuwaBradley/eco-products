import React from "react";

const ItemCard = ({ title, price, desc, image }) => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 mx-3 my-4">
			<div className="card text-center  p-0">
				<div className="card-header p-0">
					<img src={image} alt="card" className="w-100" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{desc}</p>
				</div>
				<div className="card-footer text-muted">$ {price}</div>
			</div>
		</div>
	);
};

export default ItemCard;
