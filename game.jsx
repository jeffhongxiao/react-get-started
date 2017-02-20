var StarsFrame = React.createClass({
	render: function() {
		var stars = [];
		for (var i=0; i<this.props.numberOfStars; i++) {
			stars.push(
				<span className="glyphicon glyphicon-star"></span>
			);
		}

		return (
			<div id="stars-frame">
			  <div className="well">
				  {stars}
				</div>	 
			</div>
		);
	},
});

var ButtonFrame = React.createClass({
	render: function() {
		var button;
		var correct = this.props.correct;
		switch(correct) {
			case true:
				button = (					
						<button className="btn btn-primary btn-lg btn-success" onClick={this.props.acceptAnswer} >
							<span className="glyphicon glyphicon-ok"></span>
						</button>
				)
			break;

			case false:
				button = (					
						<button className="btn btn-primary btn-lg btn-danger">
							<span className="glyphicon glyphicon-remove"></span>
						</button>
				)
			break;

			default: 
				var disabled = (this.props.selectedNumbers.length === 0);
				button = (					
						<button className="btn btn-primary btn-lg" disabled={disabled}
								onClick={this.props.checkAnswer}>
							=
						</button>
				)
		}

		return (
					<div id="button-frame">
				 	{button} 
					<br /><br />
					<button className="btn btn-warning btn-xs" onClick={this.props.redraw}
							disabled={this.props.redraws === 0}>
						<span className="glyphicon glyphicon-refresh"></span>
						&nbsp;
						{this.props.redraws}
					</button>
					</div>
		);
	},
});

var AnswerFrame = React.createClass({
	render: function() {
		var unselectNumber = this.props.unselectNumber;

		var selectedNumbers = this.props.selectedNumbers.map(function(i) {
			return (
				<span onClick={unselectNumber.bind(null, i)}>
				{i}
				</span>
			);
		});
		return (
			<div id="answer-frame">
			  <div className="well">
					{selectedNumbers}
				</div>
			</div>
		);
	},
});

var NumbersFrame = React.createClass({
	render: function() {
		var numbers = [];
		var selectedNumbers = this.props.selectedNumbers;
		var selectNumber = this.props.selectNumber;
		var usedNumbers = this.props.usedNumbers;
		for (var i=1; i<=9; i++) {
			var className = "number selected-" + (selectedNumbers.indexOf(i)>=0);
			className += " used-" + (usedNumbers.indexOf(i)>=0);

			numbers.push(
				<div className={className} onClick={selectNumber.bind(null, i)}>{i}</div>
			)
		};

		return (
			<div id="numbers-frame">
				<div className="well">
					{numbers}
				</div>
			</div>
		);
	},
});

var Game = React.createClass({
	getInitialState: function() {
		return {
			numberOfStars: this.randomNumber(), 
			selectedNumbers: [],
			usedNumbers: [],
			redraws: 5,
			correct: null
		};
	},

	randomNumber: function () {
		return Math.floor(Math.random() * 9) + 1;
	},

	selectNumber: function(number) {
		if (this.state.selectedNumbers.indexOf(number) < 0) {
			this.setState({ selectedNumbers: this.state.selectedNumbers.concat(number),
		 									correct: null	});
		}
	},

	unselectNumber: function(number) {
		var selectedNumbers = this.state.selectedNumbers;
		var index = selectedNumbers.indexOf(number);

		selectedNumbers.splice(index, 1);
		this.setState({ selectedNumbers: selectedNumbers, 
										correct: null});
	},

	acceptAnswer: function() {
		var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({ 
			usedNumbers: usedNumbers, 
			selectedNumbers: [],
			correct: null,
			numberOfStars: this.randomNumber(),
		});
	},

	sumOfSelectedNumbers: function() {
		return this.state.selectedNumbers.reduce(function(acc, val) {
			return acc + val;
		}, 0);
	},
	
	checkAnswer: function() {
		var correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
		this.setState({ correct: correct });
	},

	redraw: function() {
		if (this.state.redraws > 0) {
			this.setState({ 
				numberOfStars: this.randomNumber(),
				redraws: this.state.redraws - 1, 
				selectedNumbers: [], 
				correct: null });	
		}
	},

	render: function() {
		var selectedNumbers = this.state.selectedNumbers;
		var numberOfStars = this.state.numberOfStars;
		return (
			<div id="game">
				<h2>Play Nine</h2>	
				<hr />
				<div className="clearfix">
  				<StarsFrame numberOfStars={numberOfStars} />
	  			<ButtonFrame selectedNumbers={selectedNumbers} correct={this.state.correct} checkAnswer={this.checkAnswer} 
							acceptAnswer={this.acceptAnswer} redraws={this.state.redraws} redraw={this.redraw} />
		  		<AnswerFrame selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
				</div>

				<NumbersFrame selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={this.state.usedNumbers} />
			</div>
		);
	},
});



React.render(
	<Game />, 
	document.getElementById("container")
);
