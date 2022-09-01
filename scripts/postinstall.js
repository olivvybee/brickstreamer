const fs = require('fs');
const path = require('path');

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.min.js');

console.log('hello');
fs.copyFileSync(pdfWorkerPath, './public/pdf.worker.js');
