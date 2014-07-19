// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
    jqueryMobile: 'libs/jquery/jquery.mobile-1.4.3.min',
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
  },
  shim: {
        'bootstrap': {
            // jQueryに依存するのでpathsで設定した"module/name"を指定します。
            deps: ['underscore', "jquery"]
        },
		'jqueryFlip': {
			deps: ['jquery']
		},
		'backbone': {
                  "deps": [ "underscore", "jquery" ]
        }
    }

});

// Let's kick off the application

require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
	// Prevents all anchor click handling
        $.mobile.linkBindingEnabled = false;

        // Disabling this will prevent jQuery Mobile from handling hash changes
        $.mobile.hashListeningEnabled = false;

        // Instantiates a new Backbone.js Mobile Router
        this.router = new Mobile();
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
