define(['hbs/handlebars'], function (Handlebars) {
    function debug(context, options) {
        console.log(JSON.stringify(context, null, '\t'));
    }

    Handlebars.registerHelper("debug", debug);

    return debug;
});