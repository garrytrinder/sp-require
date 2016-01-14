/* global asyncDeltaManager */
/* global jQuery */
define(function (require, exports, module) {

    var hbs = require('hbs!modules/listsnav/1.0/hbs/listsnav'),
        css = require('css!modules/listsnav/1.0/css/listsnav'),
        spweb = require('spweb');

    function init() {
        SP.SOD.executeOrDelayUntilScriptLoaded(initLists, 'sp.js');
    }

    function initLists(ctx) {
        var $lists;

        ctx = SP.ClientContext.get_current();
        $lists = getLists(ctx);
        $lists.done(gotLists);
    }

    function getLists(ctx) {
        var $dfd = jQuery.Deferred(),
            lists,
            fields = [
                'Title',
                'DefaultViewUrl',
                'Hidden'
            ];

        lists = ctx.get_web().get_lists();
        lists = ctx.loadQuery(lists, 'Include(' + fields.join(',') + ' )');

        ctx.executeQueryAsync(function (sender, args) {
            $dfd.resolve(lists);
        }, function (sender, args) {
            $dfd.reject(sender, args);
        });

        return $dfd;

    }

    function gotLists(lists) {
        var visibleLists;

        lists.forEach(function (list) {
            console.info('Title: %s | Url: %s | Hidden: %s', list.get_title(), list.get_defaultViewUrl(), list.get_hidden());
        });

        visibleLists = getVisibleLists(lists);
        display(visibleLists);

    }

    function getVisibleLists(lists) {
        var visibleLists,
            visibleListData = [];

        visibleLists = lists.filter(function (list) {
            return list.get_hidden() === false;
        });

        visibleLists.forEach(function (list) {
            var listData = {};
            listData.Title = list.get_title();
            listData.Path = list.get_defaultViewUrl();
            visibleListData.push(listData);
        });

        return { 'lists': visibleListData };
    }

    function registerEventHandlers($html) {
        var $select = $html.find('select');
        $select.on('change', handleSelectChange);
    }

    function handleSelectChange(e) {
        console.info('ListsNav select changed: %o', e);
        var $this = jQuery(this),            
            value;

        value = $this.val();
        if (value !== '') {
            if (spweb.mdsEnabled) {                
                window.location.href = getMdsFriendlyPath(value);
            } else {
                window.location.href = value;
            }
            $this.val('');
        }
    }

    function getMdsFriendlyPath(value) {
        return _spPageContextInfo.webServerRelativeUrl + '/' + _spPageContextInfo.layoutsUrl + '/start.aspx#' + value.replace(_spPageContextInfo.webServerRelativeUrl, '');
    }

    function display(lists) {
        var $element = jQuery('div#DeltaPlaceHolderSearchArea'),
            html,
            $html;

        console.log(lists);
        html = hbs(lists);
        $html = jQuery(html);
        registerEventHandlers($html);
        $html.insertAfter($element);
    }

    module.exports = {
        init: init
    };
});