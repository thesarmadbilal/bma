
const fs = require('fs-extra');
const path = require('path');

// Source and destination paths
const sourceDir = path.resolve(__dirname, '../../dist');
const destinationDir = path.resolve(__dirname, 'build');

// Copy function
async function copyBuild() {
  try {
    // Remove old build directory if it exists
    await fs.remove(destinationDir);
    
    // Create build directory
    await fs.mkdir(destinationDir);
    
    // Copy the new build
    await fs.copy(sourceDir, destinationDir);
    
    console.log('Build files copied successfully to theme directory!');
    
    // Create an empty .htaccess file to help with routing
    await fs.writeFile(`${destinationDir}/.htaccess`, `
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
    `);
    
    console.log('Created .htaccess file for proper routing');
  } catch (err) {
    console.error('Error copying build files:', err);
  }
}

// Execute
copyBuild();
