// var React = require('react');
// var ReactDom = require('react-dom');
// var Router = require('react-router').Router;
// var routes = require('./config/routes');

import React from 'react';
import ReactDOM from 'react-dom'
// import Home from '../Home'
import { Router} from 'react-router';
// var Router = require('react-router').Router;
import routes from './config/routes'


ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
)

