var page = require('webpage').create();

console.log("Hello World!");

var url = 'http://true_type_bug.dev';

page.open(url, function () {
  page.render('tmp/phantom-1.png');
  console.log("tmp/phantom-1.png done");

  page.open(url, function () {
    page.render('tmp/phantom-2.png');
    console.log("tmp/phantom-2.png done");
    phantom.exit();
  });
});

