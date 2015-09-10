/*global define */define([	'marionette',    'hbs!templates/domain-query/item',    'hbs!templates/domain-query/composite'], function (Marionette, itemTemplate, compositeTemplate) {	'use strict';    var View = {};    View.ItemView = Marionette.ItemView.extend({        tagName: "tr", template: itemTemplate    });    View.CompositeView = Marionette.CompositeView.extend({        tagName: "table",        itemView: View.ItemView,        itemViewContainer: "tbody",        template: compositeTemplate    });    return View;});