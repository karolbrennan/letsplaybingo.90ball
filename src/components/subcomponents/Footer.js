import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="row">
					<div className="col shrink"></div>
					<div className="col">
						&copy; {new Date().getFullYear()}{' '}
						<a href="https://letsplaybingo.io">Let's Play Bingo</a>
					</div>
					<div className="col shrink"></div>
				</div>
			</footer>
		);
	}
}

export default Footer;
