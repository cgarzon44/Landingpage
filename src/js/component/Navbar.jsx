import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navbar = props => {
	return (
		<div className="mt-5">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						{props.Logo}
					</a>

					<div id="navbarSupportedContent">
						<ul className="navbar-nav d-flex flex-row justify-content-end ">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									{props.Home}{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.About}
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.Service}
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.Contact}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	Logo: PropTypes.string,
	Home: PropTypes.string,
	Button: PropTypes.string,
	About: PropTypes.string,
	Service: PropTypes.string,
	Contact: PropTypes.string
};
Navbar.defaultProps = {
	Logo: "Start Bootstrap",
	Home: "Home",
	Button: "Call to Actions",
	About: "About",
	Service: "Service",
	Contact: "Contact"
};

export default Navbar;
