// Autogenerated by Specford.
var Browser = require('zombie'),
browser = new Browser(),
test = require('../src/utils/test'),
callbacks = [function() {
test.urlMatches(/xkcd.com\/150/);
test.selectorHasText('#middleContainer', 'Grownups');
test.stop(new Date().getTime());
test.report(7);

}],
opened,
pages = [function() {
if(browser.statusCode !== 200) console.log('Network error');
else {
test.start(new Date().getTime());
test.selectorExists('#topContainer #masthead');
test.selectorHasText('#topContainer #masthead', 'A webcomic of');
test.selectorExists('#topContainer #news img[title="the xkcd store"]');
test.selectorExists('#middleContainer #ctitle');
test.selectorHasText('#middleContainer', 'Sandwich');
browser.clickLink('#middleContainer .comicNav a[rel="next"]', callbacks.shift());
}
}],
next = function(url) {
if(opened) browser.close();
browser.open();
opened=true;
test.setBrowserRef(browser);
browser.visit(url, pages.shift());};
next('http://xkcd.com/149');