// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: function() {
        return Backbone.noConflict();
		}
	},
    jqueryFlip: {
      deps: ['jquerymobile']
    },
	jquerymobile: {
		deps: ['jquery']
	}
  },
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
	jquerymobile: 'libs/jquery/jquery.mobile.custom.min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    lodash: 'libs/lodash/lodash', // alternative to underscore
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
    sinon: 'libs/sinon/sinon.js',
    bootstrap: 'libs/bootstrap/bootstrap',
    jqueryFlip: 'libs/jquery/jquery.mobile.flip',

    // Require.js plugins
    text: 'libs/require/text',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates'
  }

});

// Let's kick off the application

require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
