define(function(require, exports, module) {

	function getData(url, data) {
		
		return jQuery.ajax({
			url: url,
			type: "GET",
			cache: true,
			data: data === null ? {} : data,
			dataType: "json",
			contentType: "application/json",
			headers: {
                "ACCEPT": "application/json;odata=nometadata"
            }
		});
	
	}
	
	module.exports = {
        getData: getData
    };
});