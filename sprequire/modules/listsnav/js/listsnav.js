/* global asyncDeltaManager */
/* global jQuery */
define(function (require, exports, module) {

    var hbs = require('hbs!modules/listsnav/hbs/listsnav'),       
        spweb = require('spweb'),
        material = require('material');

    function init() {
        window.SP.SOD.executeOrDelayUntilScriptLoaded(initLists, 'sp.js');
        require('css!modules/listsnav/css/listsnav');
    }

    function initLists(ctx) {
        var $lists;

        ctx = window.SP.ClientContext.get_current();
        $lists = getLists(ctx);
        $lists.done(gotLists);
    }

    function getLists(ctx) {
        var $dfd = jQuery.Deferred(),
            lists,
            fields = [
                'Title',
                'DefaultViewUrl',
                'Hidden',                
                'BaseTemplate'                
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
        var $listItem = $html.find('li');
        $listItem.each(function(){
            jQuery(this).on('click', handleListItemClick);
        });        
    }

    function handleListItemClick(e) {
        console.info('ListsNav item clicked: %o', e);
        var $this = jQuery(this),
            value;

        value = $this.data('value');
        if (value !== '') {
            if (spweb.mdsEnabled) {                
                window.location.href = getMdsFriendlyPath(value);
            } else {
                window.location.href = value;
            }            
        }
        $this.closest('.mdl-menu__container').removeClass('is-visible');
    }

    function getMdsFriendlyPath(value) {
        return window._spPageContextInfo.webServerRelativeUrl + '/' + window._spPageContextInfo.layoutsUrl + '/start.aspx#' + value.replace(window._spPageContextInfo.webServerRelativeUrl, '');
    }

    function display(lists) {
        var $element = jQuery('div#DeltaPlaceHolderSearchArea'),
            html,
            $html;

        console.log('Lists: %o', lists);
        html = hbs(lists);
        $html = jQuery(html);
        registerEventHandlers($html);
        $html.insertAfter($element);
        material.init();
    }

    module.exports = {
        init: init
    };
});