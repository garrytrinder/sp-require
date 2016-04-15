define(function (require, exports, module) {

    function wait(fn) {
        var waitTimer = setInterval(function sppagecontextinfotimer () {
            if (typeof window._spPageContextInfo !== 'undefined') {
                clearInterval(waitTimer);
                console.info('window._spPageContextInfo: %o', window._spPageContextInfo);
                fn();
            }
        }, 10);
    }

    module.exports = {
        wait: wait
    };
}); 