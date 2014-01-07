module.exports = categorize;

function categorize (files, struct) {
  var i = -1;
  var len = files.length;
  var result = struct || {};
  var ext;

  while (++i < len) {
    if (typeof files[i] != 'string') continue;

    ext = files[i].replace(/.*\./, '');

    if (!ext) continue;

    if (struct && !struct[ext]) {
      ext = 'other';
    }

    if (result[ext]) {
      result[ext].push(files[i]);
      continue;
    }

    result[ext] = [files[i]];
  }

  return result;
}
