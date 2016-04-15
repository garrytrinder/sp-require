/* global jQuery */
define(function (require, exports, module) {

    var webpartprops = require('webpartprops'),
        props = {
            'properties': [
                {
                    'title': 'Select Properties',
                    'key': 'selectproperties',
                    'type': 'slot'
                },
                {
                    'title': 'Query Text',
                    'key': 'querytext',
                    'type': 'slot'
                },
                {
                    'title': 'Sort List',
                    'key': 'sortlist',
                    'type': 'slot'
                },
                {
                    'title': 'Source Id',
                    'key': 'sourceid',
                    'type': 'slot'
                },
                {
                    'title': 'Row Limit',
                    'key': 'rowlimit',
                    'type': 'slot'
                },
                {
                    'title': 'Trim Duplicates?',
                    'key': 'trimduplicates',
                    'type': 'slot'
                },
                {
                    'title': 'Template',
                    'key': 'template',
                    'type': 'slot'
                }
            ]
        };

    function cbslinit(elem) {
        var html,
            data,
            query,
            $element;

        $element = jQuery(elem);
        data = $element.data();
        query = constructQuery(data);

        require(['hbs!modules/contentbysearch/hbs/' + data.template], function cbsl(template) {

            jQuery.ajax({
                url: window._spPageContextInfo.webAbsoluteUrl + '/_api/search/query',
                method: 'GET',
                data: query,
                headers: {
                    'accept': 'application/json;odata=nometadata'
                }
            }).done(function cbsldone(results) {
                html = template(results);
                $element.html(html);
            }).fail(function cbslfail(err) {
                $element.html(err);
            });
        });

        webpartprops.init($element, props);
    }

    function constructQuery(data) {
        var query = {};

        for (var property in data) {
            if (property !== 'template') {
                var val = data[property];
                if (val !== '') {
                    if (needsWrap(property)) {
                        query[property] = '\'' + val + '\'';
                    } else {
                        query[property] = val;
                    }
                }
            }
        }

        return query;
    }

    function isEmpty(data) {
        return data === '' ? true : false;
    }

    function needsWrap(property) {
        var needWrap = ['querytext', 'selectproperties', 'sortlist', 'sourceid'];
        return needWrap.indexOf(property) !== -1;
    }

    module.exports = {
        init: cbslinit
    };
});