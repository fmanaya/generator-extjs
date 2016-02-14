'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-extjs:data', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/data'))
      .withOptions({
        //appname: APP
      })
      .withArguments(['APP']) // Mock the arguments
      .withPrompts({
        entidad: 'coche',
        attrs: [{
          name: 'marca',
          type: 'string',
          pattern: undefined
        }, {
          name: 'modelo',
          type: 'string',
          pattern: undefined
        }, {
          name: 'fmat',
          type: 'date',
          pattern: undefined
        }, {
          name: 'precio',
          type: 'float',
          pattern: undefined
        }],
        numreg: '4'
      })
      .on('ready', function(generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      'out/APP/store/Coche.js',
      'out/APP/model/Coche.js',
      'out/APP/data/Coche.json'
    ]);
  });
});
