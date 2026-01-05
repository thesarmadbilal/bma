
# BMA React Theme

This WordPress theme integrates the BMA Capital React application.

## Installation Instructions

1. Upload the theme zip file via WordPress Admin > Appearance > Themes > Add New > Upload Theme
2. Activate the theme after uploading
3. Your React application should now be running as the frontend of your WordPress site

## Development

### Prerequisites
- Node.js and npm installed
- WordPress installation for testing

### Building and Packaging
1. Update the React application code as needed
2. Run `npm install` to install dependencies
3. Run `npm run zip` to:
   - Build the React application
   - Copy build files to the theme directory
   - Create a zip file ready for WordPress installation

### Router Configuration
For React Router to work properly within WordPress, you need to use one of these approaches:

1. Use HashRouter instead of BrowserRouter:
   - This requires changing your main routing component to use HashRouter
   - URLs will appear as `yoursite.com/#/about` instead of `yoursite.com/about`

2. Configure WordPress permalinks and .htaccess:
   - See the included router-configuration-guide.md file for detailed instructions

## Customization

To customize WordPress integration:
1. Modify functions.php to add or change WordPress functionality
2. Edit header.php and footer.php if you need to include WordPress elements
3. Add additional template files if needed (archive.php, 404.php, etc.)

## Notes

- This theme is designed to let your React application take over the entire frontend
- WordPress is primarily used for its backend capabilities and content management
- If you need specific WordPress elements (like widgets, menus, etc.), you'll need to expose them via the WordPress REST API and consume them in your React app
