/*global define */define(['marionette'], function (Marionette) {	'use strict';    var app = new Marionette.Application();	app.addRegions({		headerRegion: '#header',		mainRegion: '#main',		footerRegion: '#footer'	});    //首页渲染    app.vent.on('index:initialization', function () {        require([            'views/index/HeaderView',            'views/index/LoginItemView',            'views/index/FooterView',            'models/LoginModel'        ], function (HeaderView, LoginItemView, FooterView, LoginModel) {            var loginModel = new LoginModel();            var headerView = new HeaderView();            var loginItemView = new LoginItemView({                model : loginModel            });            var footerView = new FooterView();            app.headerRegion.show(headerView);            app.mainRegion.show(loginItemView);            app.footerRegion.show(footerView);        })    });    //后台管理页面    app.vent.on('contentLeft:list', function () {        require([            'views/system/HeaderView',            'views/system/LayoutView',            'views/system/ContentLeftView',            'models/MenusModel'        ], function (HeaderView, LayoutView, ContentLeftView, MenusModel) {            var menus = new MenusModel();            menus.fetch();            var headerView = new HeaderView();            var layoutView = new LayoutView();            var contentLeft = new ContentLeftView({                model: menus            });            app.headerRegion.show(headerView);            app.mainRegion.show(layoutView);            app.footerRegion.reset();            layoutView.leftRegion.show(contentLeft);        })    });	return window.app = app;});