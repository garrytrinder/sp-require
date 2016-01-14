/* global jQuery */
/* global asyncDeltaManager */
define(function (require, exports, module) {

    var mdsEnabled = typeof (asyncDeltaManager) !== 'undefined';

    function init() {
        console.info("spweb init called");
        if (mdsEnabled) {
            console.info("MDS is enabled");
            registerAsyncDeltaManagerEvents();
            RegisterModuleInit('/sites/sprequiredev/Style Library/sprequire/init.js', handleMdsTransition);
            console.info("init.js registered as module with MDS with callback");
        }
        console.info("Handling page load");
        handleInitialLoad();
    }

    function registerAsyncDeltaManagerEvents() {
        console.info("Registering handlers for MDS events");
        // prevents ghosting of DOM elements on page transitions
        asyncDeltaManager.add_beginRequest(cleanupBeforeMdsTransition);
        console.info("Page cleanup function added to MDS beginRequest event");
    }

    function cleanupBeforeMdsTransition() {
        var $elements = jQuery('.sprequire');
        $elements.remove();
        console.info("DOM elements removed: %o", $elements);
    }
	
    // load modules when transition has occured
    function handleMdsTransition() {
        if (isStandardPage()) {

            console.info("Standard page found, loading dynamic modules");
            
            /* Add functionality that may not be on every page here */
            load('youtube', 'div.youtube');

        }
    }

    function isStandardPage() {
        var boolStandardPage = true;

        if (mdsEnabled) {
            boolStandardPage = window.location.href.indexOf('#/_layouts/') === -1;
        } else {
            boolStandardPage = window.location.href.indexOf('_layouts') === -1;
        }

        return isStandardPage;
    }

    function handleInitialLoad() {	   
        /* Add functionality that is to be on every page so is only loaded once here */
        require(['listsnav'], function (listsnav) {
            listsnav.init();
            console.info('listsnav module complete');
        });

        console.info("Handle dynamic modules on page load");
        handleMdsTransition();
    }

    function load(moduleName, selector) {
        var elements = jQuery(selector);
        if (elements.length > 0) {
            console.info("Elements found for %s module with %s selector ", moduleName, selector);
            require([moduleName], function (module) {
                for (var i = 0; i < elements.length; i++) {
                    module.init(elements[i]);
                    console.info("Module %s loaded on %o", moduleName, elements[i]);
                }
            });
        }
    }

    module.exports = {
        init: init,
        mdsEnabled: mdsEnabled
    };

});