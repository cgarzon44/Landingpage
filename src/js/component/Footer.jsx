import React from "react";
import PropTypes from "prop-types";

//create your first component
const Footer = props => {
	return (
		<>
			<footer
				className="mt-5 navbar navbar-expand-lg navbar-dark bg-dark "
				style={{ height: "100px" }}>
				<p className="text-white align-middle mx-auto">
					{props.Copyright}
				</p>
			</footer>
		</>
	);
};

Footer.propTypes = {
	Copyright: PropTypes.string
};
Footer.defaultProps = {
	Copyright: "Copyright© Your Website 2021"
};

export default Footer;
