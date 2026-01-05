
<?php
/**
 * The template for displaying comments
 */

// If the current post is protected by a password and
// the visitor has not yet entered the password we will
// return early without loading the comments.
if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area">
    <?php
    // You can add a message here if needed
    // For React themes, comments are typically handled by the React application
    ?>
</div><!-- #comments -->
