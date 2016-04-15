/* global jQuery */
define(function (require, exports, module) {

    var hbs = require('hbs!modules/employee/hbs/employee'),
        webpartprops = require('webpartprops'),
        props = {
            'properties': [
                {
                    'title': 'Employee',
                    'key': 'employee',
                    'type': 'person'
                }
            ]
        },
        $element;

    function init(elem) {
        var html,
            data;
        
        $element = jQuery(elem);
        data = $element.data();
        html = hbs(data);
        $element.html(html);

        webpartprops.init($element, props);
    }

    module.exports = {
        init: init
    };
});