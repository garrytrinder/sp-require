define(["handlebars"], function (Handlebars) {
    // helper definition
    function myhelper(options) {
        return 1;
    }
    
    // regiter helper with Handlebars
    Handlebars.registerHelper("myhelper", myhelper);
    
    // return helper from module
    return myhelper;
});