var Card = React.createClass({
  getInitialState: function() {
	return {};
  },

  componentDidMount: function() {
	var component = this;

	$.get("https://api.github.com/users/" + this.props.userlogin, function(data) {
	  component.setState(data);
	});

  },

  render: function () {
	return (<div>
	  <image src={this.state.avatar_url} width="80" />				
	  <h3>{this.state.name}</h3>
	  <div>{this.state.login}</div>
	  <hr/>
	</div>);
  },

});

var Form = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
	    var loginInput = React.findDOMNode(this.refs.login);

		this.props.addCard(loginInput.value);
		loginInput.value = '';	
	},

	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="github login" ref="login" />
				<button>Add</button>
			</form>			
		);
	}
});

var Main = React.createClass({
	getInitialState: function() {
		return {logins: []};
	},

	addCard: function(loginToAdd) {
		this.setState({logins: this.state.logins.concat(loginToAdd) });
	},	

	render: function() {
	  var cards = this.state.logins.map(function(login) {
		return (<Card userlogin={login} />)
	  });

	  return (
		<div>
          <Form addCard={this.addCard} />
		  <Card userlogin="jeffhongxiao" />
		  {cards}
		</div>
	  )
	},
});


React.render(
  <Main />,
  document.getElementById("root")
);

