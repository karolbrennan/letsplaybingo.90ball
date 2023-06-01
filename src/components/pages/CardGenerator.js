import React from "react";
import Select from "react-select";
import BingoCard from "../subcomponents/BingoCard";

class CardGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			generatedTickets: [],
			numberOfTickets: null,
			cardsPerTicket: null,
			blackWhite: false,
			color: "blue",
			perPage: null,
		};
		window.addEventListener("beforeprint", this.printCards);
	}

	generateBingoNumbers = () => {
		let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		let numbers = {};
		let count = 1;
		columns.forEach((column) => {
			numbers[column] = [];
			for (let i = 0; i < 10; i++) {
				numbers[column].push(count);
				count++;
			}
		});
		return numbers;
	};

	handleTicketNumberSelect = (event) => {
		this.setState({ numberOfTickets: parseInt(event.value) });
	};

	handleCardNumberSelect = (event) => {
		this.setState({ cardsPerTicket: parseInt(event.value) });
	};

	handleColorSelect = (event) => {
		this.setState({ color: event.value });
	};

	handlePerPageSelect = (event) => {
		this.setState({ perPage: event });
	};

	handleBWCheckbox = (e) => {
		this.setState({ blackWhite: e.currentTarget.checked });
	};

	handleButton = (event) => {
		let tickets = [];
		for (let i = 0; i < this.state.numberOfTickets; i++) {
			let cards = [];
			for (let b = 0; b < this.state.cardsPerTicket; b++) {
				cards.push(this.generateCard());
			}
			tickets[i] = cards;
		}
		this.setState({ generatedTickets: [...tickets] });
	};

	generateCard = () => {
		let numbers = {
			0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			1: [10, 12, 13, 14, 15, 16, 17, 18, 19],
			2: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
			3: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
			4: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
			5: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
			6: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
			7: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
			8: [80, 81, 82, 83, 84, 85, 86, 87, 88, 90],
		};
		let card = {};
		Object.keys(numbers).map((column) => {
			let chosenNumbers = [];
			for (let i = 0; i < 3; i++) {
				chosenNumbers.push(numbers[column].splice(Math.floor(Math.random() * numbers[column].length), 1)[0]);
			}
			card[column] = chosenNumbers;
			return column;
		});

		// Convert the card to rows so it's easier to create space for 4 blanks
		const cardRows = this.convertToRows(card);

		// go through each row and get 4 random elements that will be replaced with blanks
		let blanks = [];
		Object.keys(cardRows).forEach((row) => {
			for (let i = 0; i < 4; i++) {
				let randomElement = this.getRandomElement(cardRows[row]);
				while (blanks.includes(randomElement)) {
					randomElement = this.getRandomElement(cardRows[row]);
				}
				blanks.push(randomElement);
			}
		});

		// Update card with blank values
		Object.values(card).map((column) => {
			column.forEach((number, index) => {
				if (blanks.includes(number)) {
					column[index] = "";
				}
			});
			return column;
		});

		return card;
	};

	getRandomElement = (row) => {
		return row[Math.floor(Math.random() * row.length)];
	};

	convertToRows = (card) => {
		let rows = { row1: [], row2: [], row3: [] };
		Object.keys(card).map((column) => {
			rows.row1.push(card[column][0]);
			rows.row2.push(card[column][1]);
			rows.row3.push(card[column][2]);
			return column;
		});
		return rows;
	};

	printCards = () => {
		let style = document.createElement("style");
		switch (this.state.perPage.value) {
			case "2":
				style.appendChild(document.createTextNode("@page { orientation: landscape; size: landscape; margin: 1in .5in; }"));
				break;
			case "4":
				style.appendChild(document.createTextNode("@page { orientation: portrait; size: portrait; margin: 1in .5in; }"));
				break;
			case "6":
				style.appendChild(document.createTextNode("@page { orientation: landscape; size: landscape; margin: 0.4in 0.25in; }"));
				break;
			default:
				style.appendChild(document.createTextNode("@page { orientation: portrait; size: portrait; margin: 1in .5in; }"));
				break;
		}
		document.head.appendChild(style);
	};

	get perPageOptions() {
		let options = [
			{ value: "2", label: "2" },
			{ value: "4", label: "4" },
			{ value: "6", label: "6" },
		];
		return options;
	}

	get numberOfTicketsOptions() {
		let options = [];
		for (let i = 1; i <= 100; i++) {
			options.push({ value: i.toString(), label: i.toString() });
		}
		return options;
	}

	get numberOfCardsOptions() {
		let options = [];
		for (let i = 1; i <= 100; i++) {
			options.push({ value: i.toString(), label: i.toString() });
		}
		return options;
	}

	get colorOptions() {
		return [
			{ value: "red", label: "red" },
			{ value: "orange", label: "orange" },
			{ value: "yellow", label: "yellow" },
			{ value: "green", label: "green" },
			{ value: "blue", label: "blue" },
			{ value: "purple", label: "purple" },
			{ value: "pink", label: "pink" },
			{ value: "aqua", label: "aqua" },
			{ value: "gray", label: "gray" },
			{ value: "brown", label: "brown" },
		];
	}

	get sectionClasses() {
		let classes = "padding-vertical-xxlg pale-gray-bg " + this.state.blackWhite === "true" ? "print-bw " : "print-color ";
		if (this.state.perPage !== null) {
			switch (this.state.perPage.value) {
				case "2":
					classes += "print-two ";
					break;
				case "4":
					classes += "print-four ";
					break;
				case "6":
					classes += "print-six ";
					break;
				default:
					classes += "print-four ";
					break;
			}
		}
		return classes;
	}

	get generateButtonDisabled() {
		return this.state.numberOfTickets === null || this.state.cardsPerTicket === null || this.state.color === null;
	}

	render() {
		return (
			<section className={this.sectionClasses}>
				<div className="container row no-print">
					<div className="col">
						<h1>Ticket Generator</h1>
						<p>
							Generate your own tickets to print for playing at home! Simply choose how many tickets, how many cards per ticket, and a
							color and click Generate!
						</p>
						<p className="medium-text">
							Printing your tickets will default to color and 4 tickets per page. Use the options below to change these settings. <br />
							Printing 2 per page will result in larger cards for people who like bigger cards or have vision impairment.
						</p>

						<div className="row justify-start align-center extra-pale-gray-bg padding-xlg">
							<div className="col shrink padding-horizontal-md">
								<Select
									className="number-select"
									placeholder="Number of Tickets"
									options={this.numberOfTicketsOptions}
									onChange={this.handleTicketNumberSelect}
								/>
							</div>
							<div className="col shrink padding-horizontal-md">
								<Select
									className="number-select"
									placeholder="Cards Per Ticket"
									options={this.numberOfCardsOptions}
									onChange={this.handleCardNumberSelect}
								/>
							</div>
							<div className="col shrink padding-horizontal-md">
								<Select
									className="number-select"
									placeholder="Card Colors"
									options={this.colorOptions}
									onChange={this.handleColorSelect}
								/>
							</div>
							<div className="col shrink padding-horizontal-md margin-right-xlg">
								<button className="primaryBtn" onClick={this.handleButton.bind(this)} disabled={this.generateButtonDisabled}>
									Generate Cards
								</button>
							</div>
							<div className="col shrink padding-horizontal-lg">
								<h5>Printing Options</h5>
							</div>
							<div className="col shrink padding-horizontal-md">
								<Select
									className="number-select single"
									placeholder="Per Page"
									onChange={this.handlePerPageSelect}
									options={this.perPageOptions}
								/>
							</div>
							<div className="col shrink padding-horizontal-md">
								<label className={this.state.blackWhite ? "toggle checked" : "toggle"}>
									<span className="toggle-span"></span>
									<span>Print in Black/White</span>
									<input type="checkbox" onChange={this.handleBWCheckbox} checked={this.state.blackWhite}></input>
								</label>
							</div>
							<div className="col padding-horizontal-md text-right">
								<button
									data-visibility={this.state.generatedTickets.length > 0 ? "show" : "hide"}
									className="altBtn"
									onClick={() => {
										window.print();
										return false;
									}}>
									Print Cards
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="tickets row justify-center margin-vertical-lg">
					{this.state.generatedTickets.map((ticket, i) => {
						return (
							<div key={ticket + "-" + i} className="col ticket-block text-center">
								<div className="ticket" data-color={this.state.blackWhite ? "dk-gray" : this.state.color}>
									{ticket.map((card, index) => {
										return (
											<div key={"a" + index} className="card">
												<BingoCard card={card} />
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</section>
		);
	}
}

export default CardGenerator;
