//jshint strict: false
module.exports = function(config) {
  config.set({
  
    basePath: '',
    files: [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-resource.js',
      'app/lib/angular/angular-route.js',
      'app/lib/angular/angular-mocks.js',   
      'app/pet-list/pet-list.tmpl.html',
	  'app/**/*.module.js',
	  'app/**/*.js',
      'app/**/*.spec.js'
  
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],
    reporters: ['progress', 'html'],

    htmlReporter: {
      outputDir: 'karma_html', 
      templatePath: null,
      focusOnFailures: true, 
      namedFiles: false, 
      pageTitle: null, 
      urlFriendlyName: false, 
      reportName: 'report-summary-filename',
      preserveDescribeNesting: false,   
      foldAll: false
    },
     ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'templates'

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('templates')
            
        },

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.tmpl.html': ['ng-html2js']
        },


    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-html-reporter',
      'karma-ng-html2js-preprocessor'
    ]
 

  });
};
