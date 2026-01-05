
# BMA React App WordPress Integration

This folder contains two methods to integrate your BMA Capital React application with WordPress:

## 1. WordPress Plugin (/bma-react-app)

The plugin approach loads your React app using a shortcode that can be placed on any WordPress page or post.

### Installation
1. Build your React application with `npm run build`
2. Copy the contents of the `dist` folder into the `build` folder of this plugin
3. Upload the entire `bma-react-app` folder to your WordPress plugins directory
4. Activate the plugin and use the `[bma_react_app]` shortcode where needed

## 2. WordPress Theme (/bma-react-theme)

The theme approach makes your React app the primary frontend of your WordPress site.

### Installation
1. Navigate to the bma-react-theme directory
2. Run `npm install` to install dependencies
3. Run `npm run zip` to build the app and create a theme zip file
4. Upload the zip file via WordPress Admin > Appearance > Themes > Add New
5. Activate the theme

## Router Configuration

Both integration methods require special configuration for React Router. See `router-configuration-guide.md` for detailed instructions.

## Choosing the Right Approach

* **Plugin**: Best if you want to integrate your React app into specific pages while keeping your existing WordPress theme
* **Theme**: Best if you want your React app to be the primary frontend interface of your site

## Important Notes

- Configure CORS for API requests if your React app communicates with external services
- Adjust React Router settings based on your WordPress setup (see guide)
- Test thoroughly before deploying to production
