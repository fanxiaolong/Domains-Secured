/*global define */define([	'marionette'], function (Marionette) {	'use strict';	return Marionette.AppRouter.extend({		appRoutes: {            '': 'index',            'login': 'index',            'domainQuery': 'query',            '*error': 'error'		}	});});