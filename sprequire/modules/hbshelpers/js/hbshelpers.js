/* global jQuery */
define(function (require, exports, module) {

    var hbs = require('hbs!modules/hbshelpers/hbs/hbshelpers'),
        $element;

    function init(elem) {
        $element = jQuery(elem);

        jQuery.ajax({
            url: window._spPageContextInfo.webAbsoluteUrl + '/_api/search/query',
            method: 'GET',
            data: {
                'querytext': "'SharePoint'"
            },
            headers: {
                'accept': 'application/json;odata=nometadata',
                'contentype': 'application/json'
            }
        }).done(display);
    }

    function display(data) {
        var html,
            results = {
                'results': data.PrimaryQueryResult.RelevantResults.Table.Rows
            };
        
        console.log(results);
        html = hbs(results);
        $element.html(html);
    }

    module.exports = {
        init: init
    };

});