const fs = require("fs-extra");
const path = require("path");

// Source and destination paths
const sourceDir = path.resolve(__dirname, "../../dist");
const destinationDir = path.resolve(__dirname, "build");

// Copy function
async function copyBuild() {
  try {
    // Remove old build directory if it exists
    await fs.remove(destinationDir);

    // Create build directory
    await fs.mkdir(destinationDir);

    // Copy the new build
    await fs.copy(sourceDir, destinationDir);

    console.log("Build files copied successfully to theme directory!");

    // Create .htaccess file for proper routing
    await fs.writeFile(
      `${destinationDir}/.htaccess`,
      `
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# Allow direct access to backend PHP files
RewriteCond %{REQUEST_URI} ^/backend/.*\\.php$ [OR]
RewriteCond %{REQUEST_URI} ^/backend/.*$
RewriteRule ^backend/(.*)$ backend/$1 [L]

# WordPress routing
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
    `
    );

    console.log("Created .htaccess file for proper routing");
  } catch (err) {
    console.error("Error copying build files:", err);
  }
}

// Execute
copyBuild();
