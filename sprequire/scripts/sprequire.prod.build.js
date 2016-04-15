({
    name: 'init',
    baseUrl: '../',
    optimize: 'uglify2',    
    inlineText: true,
    stubModules: ['text', 'hbs', 'hbs/underscore', 'hbs/json2', 'hbs/handlebars', 'libs/normalize'],
    paths: {
        'jquery': 'empty:',
        'requireLib': 'libs/require',
    },
    include: ['requireLib', 'youtube', 'listsnav', 'hbshelpers', 'webpartprops'],
    mainConfigFile: '../init.js',
    out: '../build/init.min.js',
    hbs: {
        handlebarsPath: 'libs/hbs/handlebars.runtime'
    },
    onBuildRead: function (moduleName, path, contents) {
        // remove require SOD statements 
        if (moduleName === 'init') {
            contents = contents.replace(/SP\.SOD\.executeFunc\(\'require\.js\', null, sprequire\.configure\);/g, '');
            contents = contents.replace(/\/\/sprequire\.configure\(\);/g, 'sprequire.configure();');
        }

        // update path for mds module 
        if (moduleName === 'spweb') {
            contents = contents.replace(/RegisterModuleInit(.*)\('(.*)'/g, 'RegisterModuleInit(\'/sites/sprequiredev/siteassets/init.min.js?bust=20160125\'');
        }
            
        // fix hbs helper handlebars reference
        if (moduleName.indexOf('/helpers/') !== -1) {
            contents = contents.replace(/hbs\/handlebars/g, 'libs/hbs/handlebars.runtime');
        }
        
        // remove console statements
        contents = contents.replace(/console.(log|debug|info|...|count)\((.*)\);?/g, '');

        return contents;
    },
    findNestedDependencies: true
})