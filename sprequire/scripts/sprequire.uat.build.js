({
    name: 'init',
    baseUrl: '../',
    optimize: 'none',
    exclude: ['jquery'],
    stubModules: ['text', 'hbs', 'hbs/underscore', 'hbs/json2', 'hbs/handlebars', 'libs/normalize'],
    paths: {
        'jquery': 'empty:',
        'handlebars': 'libs/hbs/handlebars.runtime',
        'chartjs': 'empty:',
        'requireLib': 'libs/require',
    },
    include: ["requireLib",'youtube','listsnav'],
    mainConfigFile: '../init.uat.js',
    out: '../build/init.uat.js',
    hbs: {
        handlebarsPath: "handlebars"
    },
    onBuildRead: function (moduleName, path, contents) {
        contents = contents.replace(/SP\.SOD\.executeFunc\(\'require\.js\', null, sprequire\.configure\);/g, '');
        contents = contents.replace(/\/\/sprequire\.configure\(\);/g, 'sprequire.configure();');
        contents = contents.replace(/RegisterModuleInit(.*)\('(.*)'/g,'RegisterModuleInit(\'http://teams.sp2013.gt.local/sites/sprequire/SiteAssets/init.uat.js\'');
        return contents;
    },
    findNestedDependencies: true
});