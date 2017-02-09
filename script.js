// Button Component
var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.localHandleClick}>Click Me</button>
    );
  },
});

// Result Component
var Result = React.createClass({
  render: function() {
	return (
	  <div>{this.props.localCounter}</div>
    );
  },
});

// Main component
var Main = React.createClass({
  // initial state
  getInitialState: function() {
	return {counter: 0};
  },
  // handle click method
  handleClick: function() {
	this.setState({ counter: this.state.counter + 1} );
  },
  render: function() {
    return (
	  <div>
		<Button localHandleClick={this.handleClick} />
		<Result localCounter={this.state.counter} />
	  </div>
	);
  },
});

React.render(
  <Main />,
  document.getElementById("root")
);
