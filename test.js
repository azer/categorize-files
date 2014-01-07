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

it('may take a structured object optionally', function(){
  var files = {
    html: [],
    css: [],
    js: [],
    other: []
  };

  categorize([
    'foo.html',
    '/bar/qux/quux/corge.html',
    'qux.html',
    'span.html',
    'eggs.jpg.html',
    'qux/corge.jpg',
    'bar/quux.jpg',
    'hello.css',
    'yo/boo/world.css',
    '/eggs/yo.js',
    'span/quux.js',
    'foo.gif'
  ], files);

  expect(files.html).to.deep.equal(['foo.html', '/bar/qux/quux/corge.html', 'qux.html', 'span.html', 'eggs.jpg.html']);
  expect(files.css).to.deep.equal(['hello.css', 'yo/boo/world.css']);
  expect(files.js).to.deep.equal(['/eggs/yo.js', 'span/quux.js']);
  expect(files.other).to.deep.equal(['qux/corge.jpg', 'bar/quux.jpg', 'foo.gif']);
});
