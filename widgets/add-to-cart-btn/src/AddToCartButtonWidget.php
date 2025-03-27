<?php
namespace HausStorefrontWidgets;

use \Elementor\Widget_Base;
// use \HausStorefrontWidgets\Traits\ElementorTemplate;

class AddToCartButtonWidget extends Widget_Base
{
    // use ElementorTemplate;

    public function get_name()
    {
        return 'AddToCartButtonWidget';
    }

    public function get_title()
    {
        return esc_html__('Add to cart button', 'haus-ecom-widgets');
    }

    public function get_icon()
    {
        return 'eicon-product-add-to-cart';
    }

    public function get_categories()
    {
        return ['haus-ecom'];
    }

    public function get_keywords()
    {
        return ['Ecommerce', 'product', 'addtocart'];
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'section_description',
            [
                'label' => esc_html__('Description', 'haus-ecom-widgets'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'widget_description',
            [
                'type' => \Elementor\Controls_Manager::RAW_HTML,
                'raw' => esc_html__('This widget can only be used on product detail page because it requires product variantid ', 'haus-ecom-widgets'),
                'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $url = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

        // if (strpos($url, '&action=elementor') !== false) {
        //     $this->getTemplate();
        //     return;
        // }

        $widgetId = 'ecom_' . $this->get_id();
        
        $post = get_post();
        $productId = get_the_ID();
        $vendureId = get_post_meta($productId, 'vendure_id', true);

        if (!$vendureId) {
            return;
        }
        ?>

        <div 
            id="<?= $widgetId ?>"
            class="ecom-components-root add-to-cart-button-widget" 
            data-widget-type="add-to-cart-button-widget"
        >

        hejsan
        </div>
        <?php
    }
}