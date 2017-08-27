import React from 'react';
require('./Hello.scss');

var Hello = React.createClass({
  render() {
    return <h1>Hello fdsa fdsa, {this.props.name}!</h1>;
  }
});

export default Hello;
