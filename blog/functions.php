//functions.php(出力タグを指定)
add_action('widgets_init', function() {
  register_sidebar([
    'id' => 'sidebar-1',
    'name' => 'sidebar',
    'before_widget' => '<aside id="%1$s" class="widget %2$s %1$s"><div class="%2$s-inner">',
    'after_widget' => '</div></aside>'
  ]);
});