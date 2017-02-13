var StarsFrame = React.createClass({
	render: function() {
		return <div>
						...
					 </div>
	},
});

var ButtonFrame = React.createClass({
	render: function() {
		return <div>
						...
					 </div>
	},
});

var ResultFrame = React.createClass({
	render: function() {
		return <div>
						...
					 </div>
	},
});

var Game = React.createClass({
	render: function() {
		return (
			<div id="game">
			<h2>Play Nine</h2>	
			<StarsFrame />
			<ButtonFrame />
			<ResultFrame />
			</div>
		);
	},
});



React.render(
	<Game />, 
	document.getElementById("container")
);
