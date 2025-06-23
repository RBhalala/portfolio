const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Replace absolute asset paths to relative paths
      content = content.replace(/"\/_next\//g, '"./_next/');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${fullPath}`);
    }
  });
}

fixFiles('./out');
