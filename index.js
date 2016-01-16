#!/usr/bin/env node

var jsdom = require("jsdom");
var path = require('path');
var fs = require('fs-extra');
var url = 'https://github.com/hakantunc';
var data_path = path.join(__dirname, 'data.json');
var obj;

if (!fs.existsSync(data_path))
  obj = {};
else obj = fs.readJsonSync(data_path);

jsdom.env(url, [], function (err, window) {
  var result = window.document.getElementsByClassName('contrib-number');
  var number = Number(result[0].innerHTML.split(' ')[0]);
  var key = new Date().toJSON();
  obj[key] = number;
  fs.writeJSONSync(data_path, obj);
});
