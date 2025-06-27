const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const filesToCopy = ['index.html', 'styles.css', 'script.js'];

// Remove existing dist directory if it exists
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}

// Create dist directory
fs.mkdirSync(distDir);

// Copy files
filesToCopy.forEach(file => {
    fs.copyFileSync(file, path.join(distDir, file));
    console.log(`Copied ${file} to ${distDir}/`);
});

console.log('Build complete!');