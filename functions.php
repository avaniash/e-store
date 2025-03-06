<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

function custom_loginlogo() {
    echo '<style type="text/css">
    body #login h1 a, body.login h1 a {background-image: url(https://accept-reisen.de/wp-content/uploads/2023/08/accept_logo_new.png) !important; background-size: contain;width: 100%; }
    </style>';
}
add_action('login_head', 'custom_loginlogo');

add_filter( 'flamingo_map_meta_cap', function( $meta_caps ) {
  $meta_caps = array_merge( $meta_caps, array(
    'flamingo_edit_inbound_message' => 'edit_pages',
    'flamingo_edit_inbound_messages' => 'edit_pages',
  ) );

  return $meta_caps;
} );

Class accept_reisen_FrameWork {
    
    public function __construct() {
        $this->helper();
    }

    public function helper(){
        /** Include Functions Files **/
        include_once( get_template_directory() . '/inc/core_func.php' );
        include_once( get_template_directory() . '/inc/scripts_enqueuer.php' );
        include_once( get_template_directory() . '/inc/acf_func.php' );
        include_once( get_template_directory() . '/inc/ajax_reisen_blog_filters.php' );
        include_once( get_template_directory() . '/inc/import_migrate_all_live_posts.php' );
        add_theme_support( 'customize-selective-refresh-widgets' );
    }
}
/********   Menu register   *********/
add_action('init', 'accept_reisen_custom_menu'); // init is action hook
function accept_reisen_custom_menu(){
    register_nav_menus(
        array(
            'primary-menu' => __('Primary Menu', 'accept_reisen'),
        )
    );
}



function add_specific_menu_location_atts( $atts, $item, $args ) {
    $data_target_name = get_field('data_target_name', $item);
    if ($data_target_name) {
        $atts['data-target'] = $data_target_name;
    }
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3 );

// add custom link class using filter
add_filter( 'nav_menu_link_attributes', function($atts) {
    $atts['class'] = "nav-link toggle-main";
    return $atts;
}, 100, 1 );






function modify_destination_taxonomy_permalink_structure( $rules ) {
    $taxonomy = 'destination_taxonomy';

    $new_rules = array();

    $pterms = get_terms( array(
        'taxonomy' => $taxonomy,
        'hide_empty' => false,
    ) );

    foreach ( $pterms as $interm ) {
        $parent_term = get_term( $interm->parent, $taxonomy );

        if ( ! is_wp_error( $parent_term ) && $parent_term && ! empty( $parent_term->slug ) ) {
            $parent_category_slug = $parent_term->slug;
            $interm_slug = $interm->slug;

            $new_rules[ $parent_category_slug . '/' . $interm_slug . '/?$' ] = 'index.php?destination_taxonomy=' . $interm_slug . '&destination_taxonomy_term=' . $interm_slug;
        }
    }

    return $new_rules + $rules;
}
add_filter( 'rewrite_rules_array', 'modify_destination_taxonomy_permalink_structure' );

function change_destination_taxonomy_permalink( $permalink, $term, $taxonomy ) {
    if ( $taxonomy === 'destination_taxonomy' ) {
        $ancestors = get_ancestors( $term->term_id, $taxonomy );

        if ( ! empty( $ancestors ) ) {
            $parent_term = get_term_by( 'id', $ancestors[0], $taxonomy );

            if ( $parent_term ) {
                $parent_slug = $parent_term->slug;
                $permalink = home_url( $parent_slug . '/' . $term->slug . '/' );
            }
        }
    }

    return $permalink;
}
add_filter( 'term_link', 'change_destination_taxonomy_permalink', 10, 3 );





// Install Theme
$theme = new accept_reisen_FrameWork();