/* global jQuery */
define(function(require, exports, module) {
		
	var hbs 		= 	require('hbs!modules/youtube/1.0/hbs/youtube'),
		$element;
			
	function init(elem){		
		var html,
			data;
		
		$element = jQuery(elem);
		data = $element.data();
		html = hbs(data);
		$element.html(html);
	}
	
	module.exports = {
        init: init
    };	
});