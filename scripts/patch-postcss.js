const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '..', 'node_modules', 'postcss-safe-parser', 'node_modules', 'postcss', 'package.json'),
  path.join(__dirname, '..', 'node_modules', 'resolve-url-loader', 'node_modules', 'postcss', 'package.json'),
  path.join(__dirname, '..', 'node_modules', 'postcss', 'package.json'),
];

targets.forEach((p) => {
  if (fs.existsSync(p)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (pkg.exports) {
        delete pkg.exports;
        fs.writeFileSync(p, JSON.stringify(pkg, null, 2), 'utf8');
        console.log('[patch-postcss] Successfully patched:', p);
      }
    } catch (err) {
      console.warn('[patch-postcss] Notice:', err.message);
    }
  }
});
