define(function multi(require, exports, module) {

    var hbs = require('hbs!modules/multi/hbs/multi'),
        $element,
        data,
        value;

    function init(elem) {
        var html,
            $html;

        $element = jQuery(elem);
        data = $element.data();
        value = data.value;

        html = hbs(data);
        $html = jQuery(html);
        registerEventHandlers($html);
        $element.html(html);
    }

    function another() {
        console.log($element);
    }

    function registerEventHandlers($html) {
        var $button = jQuery($html[0]);

        $button.on('click', function () {
            console.log('button clicked');
        });
    }

    module.exports = {
        init: init
    };

});