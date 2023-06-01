import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="row">
					<div className="col shrink"></div>
					<div className="col">
						&copy; {new Date().getFullYear()} <a href="mailto:hello@letsplaybingo.io?subject=Lets Play Bingo 90 Ball">Karol Brennan</a>
					</div>
					<div className="col shrink"></div>
				</div>
			</footer>
		);
	}
}

export default Footer;
