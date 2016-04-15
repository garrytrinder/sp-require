/* global jQuery */
define(function (require, exports, module) {

    var hbs = require('hbs!modules/youtube/hbs/youtube'),
        webpartprops = require('webpartprops'),
        props = {
            'properties': [
                {
                    'title': 'Video ID',
                    'key': 'id',
                    'type': 'slot'
                }, {
                    'title': 'Width',
                    'key': 'width',
                    'type': 'slot'
                }, {
                    'title': 'Height',
                    'key': 'height',
                    'type': 'slot'
                }, {
                    'title': 'Border',
                    'key': 'border',
                    'type': 'slot'
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