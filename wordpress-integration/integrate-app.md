
# Integrating React App with WordPress

## Option 1: WordPress Theme (Recommended for full site integration)

The WordPress theme approach replaces your entire WordPress frontend with the React application. This method is ideal when you want the React app to serve as the primary user interface.

1. **Build your React application**:
   ```bash
   npm run build
   ```

2. **Generate the WordPress theme package**:
   ```bash
   cd wordpress-integration/bma-react-theme
   npm install
   npm run zip
   ```

3. **Install in WordPress**:
   - Go to WordPress Admin > Appearance > Themes > Add New > Upload Theme
   - Upload the generated `bma-react-theme.zip` file
   - Activate the theme

## Option 2: WordPress Plugin (Recommended for partial integration)

The WordPress plugin approach uses a shortcode to embed your React app on specific pages or posts while maintaining your current WordPress theme.

1. **Build your React application**:
   ```bash
   npm run build
   ```

2. **Copy build files to plugin directory**:
   - Create a `build` folder inside `wordpress-integration/bma-react-app/`
   - Copy all contents from your React app's `dist` folder to this `build` folder

3. **Install in WordPress**:
   - Zip the entire `bma-react-app` folder
   - Go to WordPress Admin > Plugins > Add New > Upload Plugin
   - Upload the zip file and activate
   - Use the shortcode `[bma_react_app]` on any page or post

## React Router Configuration

For proper routing within WordPress, you have two options:

### HashRouter (Easiest)

Modify your `src/App.tsx` file to use HashRouter:

```jsx
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Your routes */}
      </Routes>
    </HashRouter>
  );
}
```

### BrowserRouter with WordPress Configuration

If you prefer cleaner URLs:

1. Create a dedicated WordPress page for your app
2. Configure your WordPress `.htaccess` file as described in `router-configuration-guide.md`
3. Ensure your React app's base URL matches your WordPress configuration

## Troubleshooting

- **Styling issues**: Check for CSS conflicts with WordPress theme
- **Router problems**: Make sure you're using the correct router type (Hash or Browser)
- **API errors**: Adjust CORS settings for any external API calls
- **Missing assets**: Verify that all files were correctly copied to the build directory
