({
    name: 'init',
    baseUrl: '../',
    optimize: 'uglify2',
    exclude: ['jquery'],
    stubModules: ['text', 'hbs', 'hbs/underscore', 'hbs/json2', 'hbs/handlebars', 'libs/normalize'],
    paths: {
        'jquery': 'empty:',
        'handlebars': 'libs/hbs/handlebars.runtime',
        'chartjs': 'empty:',
        'requireLib': 'libs/require',
    },
    include: ["requireLib",'youtube','listsnav'],
    mainConfigFile: '../init.js',
    out: '../build/init.min.js',
    hbs: {
        handlebarsPath: "handlebars"
    },
    onBuildRead: function (moduleName, path, contents) {
        contents = contents.replace(/SP\.SOD\.executeFunc\(\'require\.js\', null, sprequire\.configure\);/g, '');
        contents = contents.replace(/\/\/sprequire\.configure\(\);/g, 'sprequire.configure();');
        contents = contents.replace(/RegisterModuleInit(.*)\('(.*)'/g,'RegisterModuleInit(\'http://teams.sp2013.gt.local/sites/sprequire/SiteAssets/init.min.js\'');
        return contents;
    },
    findNestedDependencies: true
})