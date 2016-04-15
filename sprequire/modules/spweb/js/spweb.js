/* global jQuery */
/* global asyncDeltaManager */
define(function (require, exports, module) {

    var mdsEnabled = typeof (asyncDeltaManager) !== 'undefined';

    function init() {
        console.info("spweb init called");
        if (mdsEnabled) {
            console.info("MDS is enabled");
            registerAsyncDeltaManagerEvents();
            window.RegisterModuleInit('/sites/sprequiredev/Style Library/sprequire/init.js', handleMdsTransition);
            console.info("init.js registered as module with MDS with callback");
        }
        registerDOMEvents();
        console.info("Handling page load");
        handleInitialLoad();
    }

    function registerAsyncDeltaManagerEvents() {
        console.info("Registering handlers for MDS events");
        console.info("Page cleanup function added to MDS beginRequest event");
        asyncDeltaManager.add_initializeRequest(function initializeRequest() {
            console.log('add_initializeRequest');
            cleanupBeforeMdsTransition();
        });
        asyncDeltaManager.add_beginRequest(function beginRequest() {
            console.log('add_beginRequest');
        });
        asyncDeltaManager.add_pageLoading(function pageLoading() {
            console.log('add_pageLoading');
        });
        asyncDeltaManager.add_pageLoaded(function pageLoaded() {
            console.log('add_pageLoaded');
        });
        asyncDeltaManager.add_endRequest(function endRequest() {
            console.log('add_endRequest');
        });
    }

    function registerDOMEvents() {
        window._spBodyOnLoadFunctionNames.push('sprequire.onload');
    }

    function cleanupBeforeMdsTransition() {
        // prevents ghosting of DOM elements on page transitions
        var $elements = jQuery('.sprequire');
        $elements.remove();
        console.info("DOM elements removed: %o", $elements);
    }

    function handleMdsTransition() {
        // load modules when transition has occured
        if (isStandardPage()) {

            console.info("Standard page found, loading dynamic modules");
            
            /* Add functionality that may not be on every page here */
            load('youtube', 'div.youtube');
            load('hbshelpers', 'div.hbshelpers');
            load('chart', 'canvas.chart');
            load('contentbysearch', 'div.contentbysearch');
            load('employee', 'div.employee');
            load('multi', 'div.multi');
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
        require(['listsnav'], function listsnavinit(listsnav) {
            listsnav.init();
            console.info('listsnav module complete');
        });

        console.info('Handle dynamic modules on page load');
        handleMdsTransition();
    }

    function load(moduleName, selector) {
        var elements;
        
        // start at the workspace div to speed up DOM traversal
        selector = 'div#s4-workspace ' + selector;
        elements = jQuery(selector);

        if (elements.length > 0) {
            console.info('Elements found for %s module with %s selector ', moduleName, selector);
            require([moduleName], function moduleloader(module) {
                for (var i = 0; i < elements.length; i++) {
                    module.init(elements[i]);
                    console.info('Module %s loaded on %o', moduleName, elements[i]);
                }
            });
        }
    }

    module.exports = {
        init: init,
        mdsEnabled: mdsEnabled
    };

});