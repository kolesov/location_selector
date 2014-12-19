<?php 
	define( 'SHORTINIT', true );
	require_once( $_SERVER['DOCUMENT_ROOT'] . '/myfoodfinder/wp-load.php' );

	$mydb= new wpdb('root','','myfoodfinder','localhost');
	$rows = $mydb->get_results("select * from wp_location_regions where state_id=".$_GET['state']);

	$regions = array();
	foreach ($rows as $obj) {
		$regions[] = array('id' => $obj->id, 'name' => $obj->name);
	}
	echo json_encode(array('regions' => $regions));
?>