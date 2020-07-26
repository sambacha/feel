/*
*
*  ©2016-2017 EdgeVerve Systems Limited (a fully owned Infosys subsidiary),
*  Bangalore, India. All Rights Reserved.
*
*/
const chalk = require('chalk');
const chai = require('chai');
const FEEL = require('../../dist/feel');
const fs = require('fs');
var jsonData = require('./builtin.json')
const expect = chai.expect;

describe(chalk.blue('built-in functions'), function () {

  jsonData.forEach(function (data) {
    if (data.executionFlag == "yes") {
      it(`should assert the following built-in function works properly - ${data.description}, (${data.group}) - ${data.expression}`, function (done) {
        // debugger;
        try {
          var parsedGrammar = FEEL.parse(data.expression);
          parsedGrammar.build()
            .then((result) => {
              expect(result, `assertion failed: ${data.expression}`).to.be.true;
              done();
            }).catch((err) => {
              done(err);
            });
        } catch (err) {
          done(err);
        }
      });
    } else {
      xit(`should ${data.description}, given ${data.group} - ${data.expression}`, function (done) { });
    }
  });
});
