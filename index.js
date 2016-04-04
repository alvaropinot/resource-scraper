var readability = require('node-readability');
var upndown = require('upndown');

var und = new upndown();

function convertUrlToMarkdown (url) {
  readability(url, function (err, article, meta) {
    und.convert(article.content, function(err, markdown) {
      if (err) {
        console.err(err)
      }
      else {
        console.log(markdown);
      }
      article.close();
    });
  });
}

convertUrlToMarkdown(url);

module.exports = convertUrlToMarkdown;
