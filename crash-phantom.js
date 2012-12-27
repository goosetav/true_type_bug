var url = 'http://true_type_bug.dev';

var page = require('webpage').create();

page.open(url, function () {
    
  page.release();
  page = require('webpage').create();
  
  page.open(url, function () {
    phantom.exit();
  });
  
});
