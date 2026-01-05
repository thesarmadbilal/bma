
<?php
/**
 * BMA React Theme functions and definitions
 */

// Define constants
define('BMA_THEME_DIR', get_template_directory());
define('BMA_THEME_URI', get_template_directory_uri());

// Enqueue scripts and styles
function bma_react_theme_scripts() {
    // Enqueue the React built files
    $cssFiles = glob(BMA_THEME_DIR . '/build/assets/*.css');
    $jsFiles = glob(BMA_THEME_DIR . '/build/assets/*.js');
    
    if (!empty($cssFiles)) {
        foreach ($cssFiles as $cssFile) {
            $cssFileName = basename($cssFile);
            wp_enqueue_style(
                'bma-react-' . $cssFileName,
                BMA_THEME_URI . '/build/assets/' . $cssFileName,
                array(),
                filemtime($cssFile)
            );
        }
    }
    
    if (!empty($jsFiles)) {
        foreach ($jsFiles as $jsFile) {
            $jsFileName = basename($jsFile);
            wp_enqueue_script(
                'bma-react-' . $jsFileName,
                BMA_THEME_URI . '/build/assets/' . $jsFileName,
                array(),
                filemtime($jsFile),
                true
            );
        }
    }
    
    // Localize script with WordPress data
    wp_localize_script(
        'bma-react-index',
        'bmaSiteData',
        array(
            'siteUrl' => get_site_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'restUrl' => get_rest_url(),
            'nonce' => wp_create_nonce('wp_rest')
        )
    );
}
add_action('wp_enqueue_scripts', 'bma_react_theme_scripts');

// Add theme support
function bma_react_theme_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bma-react-theme'),
        'footer' => __('Footer Menu', 'bma-react-theme'),
    ));
    
    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Add support for custom logo
    add_theme_support('custom-logo');
    
    // Add support for full and wide align images
    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'bma_react_theme_setup');

// Disable the admin bar for a cleaner React experience
show_admin_bar(false);

// Add widgets support
function bma_react_theme_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'bma-react-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'bma-react-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'bma_react_theme_widgets_init');

// Add custom REST API endpoints if needed
function bma_react_theme_rest_api_init() {
    register_rest_route('bma/v1', '/settings', array(
        'methods' => 'GET',
        'callback' => 'bma_get_theme_settings',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'bma_react_theme_rest_api_init');

function bma_get_theme_settings() {
    return array(
        'title' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'url' => get_bloginfo('url'),
    );
}

// Add custom image sizes if needed
add_image_size('bma-featured', 1200, 600, true);
add_image_size('bma-thumbnail', 600, 400, true);
