var Button = React.createClass({
  // initial state
  getInitialState: function() {
	return {counter: 0};
  },
  // handle click method
  handleClick: function() {
	this.setState({ counter: this.state.counter + 1} );
  },
  // render method
  render: function() {
    return (
      <button onClick={this.handleClick}>{this.state.counter}</button>
    );
  }
});

React.render(
  <Button />,
  document.getElementById("root")
);
