var jsdom = require("jsdom");
var url = 'https://github.com/hakantunc';

jsdom.env(url, [], function (err, window) {
  var result = window.document.getElementsByClassName('contrib-number');
  var number = Number(result[0].innerHTML.split(' ')[0]);
});
