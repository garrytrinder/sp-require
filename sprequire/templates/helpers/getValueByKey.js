define(['hbs/handlebars'], function (Handlebars) {
    function getValueByKey(context, options) {
        var item = context.filter(function (item) {
            return item.Key === options;
        });

        if (item !== null) {
            return item[0].Value;
        }
    }

    Handlebars.registerHelper("getValueByKey", getValueByKey);

    return getValueByKey;
});
