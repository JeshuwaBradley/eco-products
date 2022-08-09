import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light navbar-light p-4 px-5">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							src="images/logo.png"
							className="navbar-logo"
							alt=""
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						<ul className="navbar-nav  me-1">
							<li className="nav-item me-3 me-lg-0 px-2">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item me-3 me-lg-0 px-2">
								<Link className="nav-link" to="/products">
									Products
								</Link>
							</li>
							<li className="nav-item me-3 me-lg-0 px-2">
								<Link className="nav-link" to="/about">
									About Us
								</Link>
							</li>
							<li className="nav-item me-3 me-lg-0 px-2">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</ul>

						{/* <form className="w-auto px-2">
							<input
								type="search"
								className="form-control"
								placeholder="Search"
								aria-label="Search"
							/>
						</form> */}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
