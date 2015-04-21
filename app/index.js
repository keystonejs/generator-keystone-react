'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var TestGenerator = yeoman.generators.Base.extend({

  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();


    this.log(yosay('Welcome to ' + chalk.green('Keystone-React') + ' generator!'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: 'Keystone-React'
    }, {
      type: 'confirm',
      name: 'createDirectory',
      message: 'Would you like to create a new directory for your project?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.log('\n');
      this._.extend(this, props);
      this.projectKey = this._.slugify(this.projectName).toLowerCase();
      if (props.createDirectory) {
        this.destinationRoot(this.projectKey);
      }
      done();
    }.bind(this));
  },

  writing: {
    project: function() {
      this.copy('keystone.js', 'keystone.js');
      this.copy('editorconfig', '.editorconfig');
      this.copy('gitignore', '.gitignore');
      this.copy('jshintrc', '.jshintrc');
      this.copy('Procfile', 'Procfile');
      this.template('_package.json', 'package.json');
    },

    clientfiles: function() {
      this.copy('client/scripts/application.js', 'client/scripts/application.js');
    },

    libfiles: function() {
      this.copy('lib/modelToJSON.js', 'lib/modelToJSON.js');
    },

    modelfiles: function() {
      this.copy('models/User.js', 'models/User.js');
    },

    publicfiles: function() {
      this.copy('public/favicon.ico', 'public/favicon.ico');
      this.directory('public/styles', 'public/styles');
    },

    routesfiles: function() {
      this.directory('routes/api', 'routes/api');
      this.copy('routes/index.js', 'routes/index.js');
    },

    templatefiles: function() {
      this.copy('templates/views/index.jade', 'templates/views/index.jade');
    },

    updatefiles: function() {
      this.copy('updates/0.0.1-admins.js', 'updates/0.0.1-admins.js');
    }

  },

  install: function() {
    this.npmInstall();
  },

  end: function() {
    var chdir = this.createDirectory ? '"cd ' + this.projectKey + '" then ' : '';
    this.log(
      '\n' + chalk.green.underline('Your new project is ready!') +
      '\n' +
      '\n' +
      '\nType ' + chdir + '"node keystone" to start the server.' +
      '\n'
    );
  }
});

module.exports = TestGenerator;