/*
consola como admin por si hay que instalr modulos

E:\DEV\yeoman\generator-extjs>yo extjs:data KK
*/
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var datafaker = require('./datafaker');

//var beautify = require('gulp-beautify');
var beautify = require('gulp-jsbeautifier');


module.exports = yeoman.generators.Base.extend({


  // note: arguments and options should be defined in the constructor.
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', {
      type: String,
      required: true
    });
    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
  },

  initializing: function() {
    this.log('initializing');
    this.outputDir = 'out';
    this.registerTransformStream(beautify({
      indentSize: 4,
      preserveNewlines: false
    }));
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sweet ' + chalk.red('generator-extjs') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'entidad',
        message: 'Nombre de la entidad?'
      },
      /*{
            type: 'list',
            name: 'propType',
            choices : ['integer','string','float','double','date','object'],
            message: 'Es de tipo:'
          },*/
      {
        /*
        marca:string modelo fechaMat:date precio:int precio2:int:finance.amount ownerName:string:name.firstName ownerLasrName:string:name.lastName fechaNac:date:date.past agent:string:name.findName descripcion:string:lorem.paragraph revision:date:date.future
        marca:string:company.companyName modelo:string:company.bsNoun fechaMat:date:past precio:int valor:float ownerName:string:name.firstName ownerLasrName:string:name.lastName agent:string:name.findName email:string:internet.email telef:string:phone.phoneNumber
        */
        type: 'input',
        name: 'attrs',
        defaults: [],
        message: 'field[:type[:method]] field[:type[:method]]',
        filter: function(resp) {
          console.log('FILTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
          return resp.split(' ').map(function(attr) {
            var parts = attr.split(':');
            return {
              name: parts[0],
              type: parts[1] || 'string',
              pattern: parts[2],
            };
          })
        }
      }, {
        type: 'input',
        name: 'numreg',
        message: 'json, ¿Cuantos registros de prueba?'
      }
    ];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.log(props);
      done();
    }.bind(this));
  },



  writing: {
    //store extJs
    store: function() {
      var cname = this._getClassName('store', this.props.entidad);
      var ofile = this._getClass2File(cname);
      this.fs.copyTpl(
        this.templatePath('store.ejs'),
        this.destinationPath(ofile), {
          cName: cname,
          appName: this.appname,
          data: this.props
        }
      );
    },
    //modelo extJs
    model: function() {
        var cname = this._getClassName('model', this.props.entidad);
        var ofile = this._getClass2File(cname);
        this.fs.copyTpl(
          this.templatePath('model.ejs'),
          this.destinationPath(ofile), {
            cName: cname,
            appName: this.appname,
            data: this.props
          }
        );
      }
      //datos json para store, ver faker

    ,
    mockjson: function() {
      var cname = this._getClassName('data', this.props.entidad);
      var ofile = this._getClass2File(cname, '.json');
      var data=[];
      for (i=0; i<= this.props.numreg; i++) {
        data.push(this._flattenProps(this.props));
      }
      this.log('************* mocks ****************');
      this.log(data);
      this.fs.copyTpl(
        this.templatePath('mockjson.ejs'),
        this.destinationPath(ofile), {
          cName: cname,
          jsonData: JSON.stringify(data),
          kk: this._flattenProps(this.props)
        }
      );
    }


  },

  install: function() {
    this.installDependencies();
  },


  //helper or private methods that won't be called automatically
  _getClassName: function(ftype, ent) {
    var f = [_.toUpper(this.appname), ftype, _.upperFirst(ent)].join('.');
    this.log('_getClassName:' + f);
    return f; //'out/' + this.props.entidad + '.js'
  },
  _getClass2File: function(cName, ext) {
    var dotted = _.replace(cName, /\./g, '/') + (ext || '.js');
    //this.log('_getClass2File:' + dotted);
    //this.log('_getClass2File:' + _.replace(cName, '/\./g', '/') + '.js' );
    var f = [this.outputDir, dotted].join('/');
    //this.log('_getClass2File:' + f);
    return f; //'out/' + this.props.entidad + '.js'
  },
  /*
  * Sacar esto a un modulito...
  * Atendiendo al tipo y metodo llama a un api de FakerJs https://github.com/marak/Faker.js/
  */
  _fakeData: function(type, method) {
    return faker.name.findName();
  },
  _flattenProps: function(data) {
    var thing = {}, me=this;

    //this.log('***************');
    //this.log(data);


    _.forEach(data.attrs, function(atr) {
      //me.log('en _flattenProps:'+atr.name);
      thing[atr.name] = datafaker.get(atr.type, atr.pattern);
    });
    //me.log(thing);
    return thing;
    //data.push(thing);
  },
  // TODO: quitar
  method1: function() {
    this.log('method 1 just ran');
  },
  // TODO: quitar
  method2: function() {
    this.log('method 2 just ran');
    this._method3();
  }, // TODO: quitar
  _method3: function() {
    this.log('method 3 just ran');

  }
});
