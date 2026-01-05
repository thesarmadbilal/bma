
# Configuring React Router for WordPress Integration

When embedding a React application that uses React Router into WordPress, you need to make some adjustments to ensure routing works properly:

## Option 1: Use Hash Router

The simplest solution is to modify your React app to use HashRouter instead of BrowserRouter:

```jsx
// In your App.tsx or similar file
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Routes>
      {/* Your routes */}
    </Routes>
  </HashRouter>
);
```

With HashRouter, URLs will look like `your-wordpress-page/#/about` instead of `your-wordpress-page/about`.

## Option 2: Configure WordPress Permalink Settings

If you prefer to use BrowserRouter for cleaner URLs:

1. Create a dedicated WordPress page (e.g., "BMA App")
2. Set up WordPress permalink settings to accommodate React Router paths
3. Add rewrite rules in your WordPress .htaccess file

Example .htaccess additions:
```
# Add this to your .htaccess file
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^bma-app/(.*)$ /bma-app/ [L]
</IfModule>
```

This will ensure that requests to paths like `/bma-app/about` will still serve the `/bma-app/` WordPress page, allowing React Router to handle the routing client-side.
