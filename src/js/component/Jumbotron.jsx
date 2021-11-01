import React from "react";
import PropTypes from "prop-types";

//create your first component
const Jumbotron = props => {
	return (
		<>
			<div
				className="jumbotron "
				style={{
					backgroundColor: "#e4e4e2",
					padding: "25px",
					paddingTop: "0px"
				}}>
				<div
					className="container"
					style={{
						marginBottom: "50px"
					}}>
					<h1 className="display-4">{props.Welcome}</h1>
					<p className="lead">{props.Description}</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							{props.Button}{" "}
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

Jumbotron.propTypes = {
	Welcome: PropTypes.string,
	Description: PropTypes.string,
	Button: PropTypes.string
};
Jumbotron.defaultProps = {
	Welcome: "A Warm Welcome!!",
	Description:
		"Lorem ipsum dolor sit ament, consectetur adipiscing elit. ipsa, ipsam, eligendi, in quo sunt possimus non indidunt odit vero aliquid simlique quaerat nam nobis illo assoernatur vitae fungiat numquam repellat",
	Button: "Call to Actions"
};

export default Jumbotron;
