import React from "react";
import PropTypes from "prop-types";

//create your first component
const Card = props => {
	return (
		<div className="container">
			<div className="card col-12 mt-3">
				{" "}
				<img
					className="card-img-top"
					src={props.Image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">
						{props.Cardtitle}
					</h5>
					<p className="card-text text-center">{props.Description}</p>
				</div>
				<div className="m-0 text-center">
					<div className="card-footer text-muted m-0  ">
						<a href="#" className="btn btn-primary">
							{props.Button}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	Image: PropTypes.string,
	Cardtitle: PropTypes.string,
	Description: PropTypes.string,
	Button: PropTypes.string
};
Card.defaultProps = {
	Image: "https://www.caballerovillalpandoabogados.mx/img/our-office-8.jpg",
	Cardtitle: "Card title",
	Description:
		"Some quick example text to build on the card title and makeup the bulk of the cards content.",
	Button: "Go somewhere"
};

export default Card;
