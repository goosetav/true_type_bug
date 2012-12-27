var url = 'http://true_type_bug.dev';
var viewport = {
  width: 1024,
  height: 768
}


var page = require('webpage').create();
page.viewportSize = viewport;


page.open(url, function () {
    
  // reset process
  page.release();
  phantom.clearCookies();
  page = require('webpage').create();
  page.viewportSize = viewport;    
  
  
  page.open(url, function () {
    phantom.exit();
  });
  
});
