import React from 'react';
import Main from '../Main';
import Home from '../Home';
import Profile from '../Profile';
import { Router, Route, IndexRoute } from 'react-router';


// var React = require('react');
// var Main = require('../Main');
// var Home = require('../Home');
// var Router = require('react-router');
// var Route = Router.Route;
// var IndexRoute = Router.IndexRoute;

module.exports = (
	<Route path="/" component={ Main }>
	<Route path="profile/:username" component={ Profile } />
	<IndexRoute component={ Home } />
	</Route>	
)
