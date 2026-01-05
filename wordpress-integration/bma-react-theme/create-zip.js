
const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

// Create a file to stream archive data to
const output = fs.createWriteStream(path.resolve(__dirname, '../bma-react-theme.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('Theme has been zipped successfully!');
  console.log('Total bytes: ' + archive.pointer());
});

// Handle warnings and errors
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files from the theme directory (excluding node_modules and certain files)
archive.glob('**/*', {
  cwd: __dirname,
  ignore: [
    'node_modules/**',
    'package.json',
    'package-lock.json',
    'copy-build.js',
    'create-zip.js',
    '.DS_Store',
    'bma-react-theme.zip'
  ]
});

// Finalize the archive
archive.finalize();
