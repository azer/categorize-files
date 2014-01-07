var categorize = require("./");

it('categorizes files by extensions', function(){
  var files = categorize([
    'foo.html',
    '/bar/qux/quux/corge.html',
    'qux.html',
    'span.html',
    'eggs.jpg.html',
    'qux/corge.jpg',
    'bar/quux.jpg',
    'foo.gif'
  ]);

  expect(files.html).to.deep.equal(['foo.html', '/bar/qux/quux/corge.html', 'qux.html', 'span.html', 'eggs.jpg.html']);
  expect(files.jpg).to.deep.equal(['qux/corge.jpg', 'bar/quux.jpg']);
  expect(files.gif).to.deep.equal(['foo.gif']);
});
