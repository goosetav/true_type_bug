var url = 'http://true_type_bug.dev';

var page1, page2, page3;

page1 = require('webpage').create();
page1.open(url, function () {
  
  // uncomment this to cause the crash
  //page1.release();

  page2 = require('webpage').create();
  
  page2.open(url, function () {

    page2.release();
    
    page3 = require('webpage').create();
    
    page3.open(url, function() {

      phantom.exit();

    });

  });
  
});
