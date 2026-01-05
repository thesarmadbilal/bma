
<?php
/**
 * Plugin Name: BMA React Application
 * Description: Integration of BMA Capital React application
 * Version: 1.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class BMAReactApp {
    public function __construct() {
        // Register shortcode
        add_shortcode('bma_react_app', array($this, 'render_react_app'));
        
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_react_assets'));
    }
    
    public function enqueue_react_assets() {
        // Only enqueue on pages where the shortcode is used
        global $post;
        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'bma_react_app')) {
            
            // Get the plugin directory URL
            $plugin_url = plugin_dir_url(__FILE__);
            
            // Enqueue the CSS files from the build
            wp_enqueue_style(
                'bma-react-styles',
                $plugin_url . 'build/assets/index.css',
                array(),
                '1.0.0'
            );
            
            // Enqueue the JS files from the build
            wp_enqueue_script(
                'bma-react-scripts',
                $plugin_url . 'build/assets/index.js',
                array(),
                '1.0.0',
                true
            );
        }
    }
    
    public function render_react_app() {
        return '<div id="root" class="bma-react-app"></div>';
    }
}

// Initialize the plugin
new BMAReactApp();
