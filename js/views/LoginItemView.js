/*global define */
define([
    'marionette',
    'hbs!templates/content',
    'validation',
    'jquery.serializeObject'
], function (Marionette, tmpl) {
    'use strict';
    return Marionette.ItemView.extend({
        template: tmpl,
        className: 'content',
        events: {
            'click #signUpButton': function (e) {
                e.preventDefault();
                this.signUp();
            }
        },
        initialize: function () {
            // This hooks up the validation
            // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/validation-binding
            Backbone.Validation.bind(this);
        },

        signUp: function () {
            var data = this.$('form').serializeObject();

            this.model.set(data);

            // Check if the model is valid before saving
            // See: http://thedersen.com/projects/backbone-validation/#methods/isvalid
            if(this.model.isValid(true)){
                // this.model.save();
                alert('��½�ɹ�');
            }
        },

        remove: function() {
            // Remove the validation binding
            // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
            Backbone.Validation.unbind(this);
            return Backbone.View.prototype.remove.apply(this, arguments);
        },

        //view when binding:
        onRender: function () {
            Backbone.Validation.bind(this, {
                valid: function (view, attr, selector) {
                    var $el = view.$('#msg');
                },
                invalid: function (view, attr, error, selector) {
                    var $el = view.$('#msg')
                    $el.html(error);
                }
            });
        },
    });
});
