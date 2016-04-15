/* global jQuery */
define(function (require, exports, module) {

    var Chart = require('chartjs'),
        $element;

    function init(elem) {
        var ctx,
            data,
            uniqid = 'chart' + window.getUniqueIndex(),
            charttype;

        $element = jQuery(elem);
        charttype = $element.data('charttype');
        $element.attr('id', uniqid);

        data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        ctx = document.getElementById(uniqid).getContext("2d");
        renderChart(ctx, data, {}, charttype);
    }

    function renderChart(ctx, data, options, charttype) {
        var newchart;
        switch (charttype.toLowerCase()) {
            case 'line':
                newchart = new Chart(ctx).Line(data, options);
                break;
            case 'bar':
                newchart = new Chart(ctx).Bar(data, options);
                break;
            default:
                break;
        }

    }

    module.exports = {
        init: init
    };

});