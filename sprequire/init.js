/* global _spPageContextInfo */
/* global RegisterModuleInit */
/* global Type */
/* global SP */
// declare global namespace variable

var sprequire = window.sprequire || {};
console.info("sprequire global namespace created");

// register namespace with Microsoft Ajax
if (typeof (Type) !== 'undefined') {
    Type.registerNamespace('sprequire');
    console.info("sprequire namespace registered with Microsoft Ajax");
}

sprequire.init = function () {
	
    // register require with SOD
    SP.SOD.registerSod('require.js', '/sites/sprequiredev/Style Library/sprequire/libs/require.js');
    console.info("require.js registered with SP.SOD");
	
    // load require from SOD
    SP.SOD.executeFunc('require.js', null, sprequire.configure);
    console.info("require.js loaded from SP.SOD");
	
    //production - uncommented at build time, ensures only our require is loaded
	
    //sprequire.configure();

};

sprequire.configure = function () {

    require.config({
        // define the base path for all modules in require
        baseUrl: '/sites/sprequiredev/Style Library/sprequire/',
        // define global require mappings
        map: {
            '*': {
                'css': 'libs/css.min'
            }
        },
        // define alias to paths of modules for easy access
        paths: {
            'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
            'hbs': 'libs/hbs',
            'chartjs': '//cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min',
            'utility': 'libs/utility',
            'text': 'libs/text',
            'youtube': 'modules/youtube/1.0/js/youtube',
            'spweb': 'modules/spweb/1.0/js/spweb',
            'listsnav': 'modules/listsnav/1.0/js/listsnav'
        },
        //define the dependencies on require
        deps: ['jquery'],
        // fire callback when require deps have loaded
        callback: function () {
            console.info("require callback fired");
            require(['spweb'], function (spweb) {
                console.info("run spweb initiation");
                spweb.init();
            });
        }
    });
    console.info("require configured");
    console.info('_spPageContextInfo: %o', _spPageContextInfo);
};

// initialise sprequire
sprequire.init();
console.info("sprequire.init called");