## categorize-files

Categorize given files by extensions

## Install

```bash
$ npm install categorize-files
```

## Usage

```js
categorizeFiles = require('categorize-files')

categorizeFiles(['foo.html', 'bar/bar.html', 'qux.js', 'corge.css'])
// => { html: ['foo.html', 'bar/bar.html'], js: ['qux.js'], css: ['corge.css'] }
```
