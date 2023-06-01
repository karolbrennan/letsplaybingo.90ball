import React, { Component } from "react";

class BingoBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: props.board,
			manualMode: props.manualMode,
			manualCall: props.manualCall,
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props !== state) {
			state = props;
		}
		return state;
	}

	render() {
		return (
			<div id="board" className="flex">
				{Object.keys(this.state.board).map((column, i) => {
					return (
						<div key={"board-row-" + i} className="row no-wrap set-size text-center notranslate">
							{this.state.board[column].map((number) => {
								return (
									<div
										key={"ball-" + number.number}
										className={number.active ? "col ball active" : number.called ? "col ball called" : "col ball"}>
										{this.state.manualMode ? (
											<button onClick={() => this.state.manualCall(number)}>{number.number}</button>
										) : (
											number.number
										)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}
export default BingoBoard;
