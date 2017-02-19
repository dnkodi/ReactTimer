var React = require('react');
var ReactDOM = require('react-dom');
//es6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//load foundation
$(document).foundation();

//load app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>

  </Router>,
  document.getElementById('app')
);
