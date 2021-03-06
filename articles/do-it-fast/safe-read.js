// Load 'fs', a built-in node library that has async functions
var fs = require('fs');
var sys = require('sys');

function safeRead(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      if (error.errno === process.ENOENT) {
        // Ignore file not found errors and return an empty result
        callback(null, "");
      } else {
        // Pass other errors through as is
        callback(err);
      }
    } else {
      // Pass successes through as it too.
      callback(null, data);
    }
  })
}

safeRead(__filename, function (err, text) {
  if (err) {
    throw err;
  }
  sys.puts(text);
})
