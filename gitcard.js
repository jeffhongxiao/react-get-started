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
	  <h3>{this.state.login}</h3>
	  <hr/>
	</div>);
  },

});

var Main = React.createClass({
	render: function() {
	  return (
		<div>
		  <Card userlogin="jeffhongxiao" />
		  <Card userlogin="tj" />
		</div>
	  )
	},
});


React.render(
  <Main />,
  document.getElementById("root")
);

