/*global define*/
define([
    'jquery',
    'backbone',
    'collections/todos',
    'common',
    'views/app'
], function ($, Backbone, Todos, Common, AppView) {
    'use strict';

    var Workspace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        initialize: function () {
            new AppView();
        },

        setFilter: function (route) {
            // Set the current filter to be used
            Common.TodoFilter = route ? route.trim() : '';

            // Trigger a collection filter event, causing hiding/unhiding
            // of the Todo view items
            Todos.trigger('filter');
        }
    });

    return Workspace;
});
