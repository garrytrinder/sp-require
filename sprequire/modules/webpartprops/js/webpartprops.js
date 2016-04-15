/* global _v_dictSod */
/* global jQuery */
define(function (require, exports, module) {

    var wppanehbs = require('hbs!modules/webpartprops/hbs/webpartpropspane'),
        $wppane,
        wpid;

    function init($element, props) {
        if (isWebPartPaneOpen()) {
            if (isWebPartPaneForCurrentWebPart($element)) {
                renderWebPartProperties(props);
            }
        }
    }

    function isWebPartPaneOpen() {
        return window.MSOSPWebPartManager_DisplayModeName.value === 'Edit';
    }

    function isWebPartPaneForCurrentWebPart($element) {
        var wpineditid,
            elementwpid;

        wpineditid = jQuery('div#s4-workspace div[wptoolpaneopen=true]').find('div.ms-WPBody').attr('webpartid2');
        elementwpid = $element.closest('div.ms-WPBody').attr('webpartid2');

        return wpineditid === elementwpid;
    }

    function renderWebPartProperties(props) {
        var wppane,
            $wp,
            wpdata,
            html;

        wppane = jQuery('.ms-TPBody')[0];
        $wppane = jQuery(wppane);
        wpid = wppane.id.split('0g_')[1];
        props.id = 'customprops' + wpid;

        $wp = jQuery('div#MSOZoneCell_WebPartctl00_ctl33_g_' + wpid);

        wpdata = $wp.find('div.sprequire').data();
        props.properties.forEach(function (prop) {
            prop.value = wpdata[prop.key];
        });

        html = wppanehbs(props);
        $wppane.prepend(html);
        jQuery(html).find('div.peoplepicker').each(function () {
            var layouts = window.window._spPageContextInfo.layoutsUrl + '/',
                pickerdeps = [
                    'clienttemplates.js',
                    'clientforms.js',
                    'clientpeoplepicker.js',
                    'autofill.js',
                    'sp.js',
                    'sp.runtime.js',
                    'sp.core.js'
                ],
                $picker = jQuery(this);

            pickerdeps.forEach(function (dep) {
                if (!_v_dictSod[dep]) {
                    SP.SOD.registerSod(dep, layouts + dep);
                }
            });

            SP.SOD.loadMultiple(pickerdeps, function () {
                initilizePeoplePicker($picker);
            });
        });

        registerEventHandlers();
    }

    function updateProperties(e) {
        var selector = 'input#' + wpid.replace(/_/g, '-') + 'scriptcontent',
            $custompropdiv = $wppane.find('div#customprops'),
            $customprops = $custompropdiv.find('input.webpartprop'),
            $custompeoplepickers = $custompropdiv.find('div.sp-peoplepicker-topLevel'),
            $aspNetHiddenElement = jQuery(selector),
            $scriptcontent = jQuery($aspNetHiddenElement.val());

        $customprops.each(function () {
            var $this = jQuery(this);
            $scriptcontent.attr('data-' + $this.attr('name'), $this.val());
        });

        $custompeoplepickers.each(function () {
            var $this = jQuery(this),
                $hiddenInput = $this.find('input:first-child'),
                val;

            val = $hiddenInput.val();
            val = JSON.parse(val);

            $scriptcontent.attr('data-' + $hiddenInput.closest('.peoplepicker').attr('name'), JSON.stringify(val[0]));
        });

        $aspNetHiddenElement.val($scriptcontent[0].outerHTML);
    }

    function registerEventHandlers() {
        var $toolpanefooter = jQuery('.ms-toolpanefooter'),
            $okbutton,
            $applybutton;

        $okbutton = $toolpanefooter.find('input[value=\'OK\']');
        $okbutton.on('click', updateProperties);

        $applybutton = $toolpanefooter.find('input[value=\'Apply\']');
        $applybutton.on('click', updateProperties);
    }


    function initilizePeoplePicker($picker) {

        var schema = {
            PrincipalAccountType: 'User,DL,SecGroup,SPGroup',
            SearchPrincipalSource: 15,
            ResolvePrincipalSource: 15,
            AllowMultipleValues: false,
            MaximumEntitySuggestions: 50,
            Width: '280px',
            OnUserResolvedClientScript: function OnUserResolvedClientScript() {
                console.log(this);
            }
        },
        defaultUser = $picker.data('value');

        if (defaultUser !== '') {
            window.SPClientPeoplePicker_InitStandaloneControlWrapper($picker.attr('id'), JSON.parse(defaultUser), schema);
        }
        else {
            window.SPClientPeoplePicker_InitStandaloneControlWrapper($picker.attr('id'), null, schema);
        }
        
        
        /*
        // check if user 
        var currentUserValue = this.$element.parent().find(this.elementId + "-hiddenvalue").text()
        if (currentUserValue != "") {
        
            // get reference to existing people picker
            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.mercurypeoplepicker_TopSpan;
            peoplePicker.AddUserKeys(currentUserValue);
        }
        */
    }

    module.exports = {
        init: init
    };

});