<?php
namespace HausStorefrontWidgets\AddToCart;
add_action('init', function () {
    if (!defined('WP_INSTALLING') && !did_action('elementor/loaded')) {
        return;
    }
    \Elementor\Plugin::instance()
        ->widgets_manager
        ->register(new \HausStorefrontWidgets\AddToCartButtonWidget());

});
