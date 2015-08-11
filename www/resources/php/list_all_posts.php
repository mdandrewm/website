<?php
function listAllPosts($dir, $path = "") {
	$result = array();
	
	$cdir = scandir($dir);
	foreach ($cdir as $value) 
   { 
		if (!in_array($value,array(".",".."))) 
		{ 
			if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
			{ 
				$result = array_merge($result, listAllPosts($dir . DIRECTORY_SEPARATOR . $value)); 
			} 
			else 
			{ 
				$result[] = $dir . DIRECTORY_SEPARATOR . $value; 
			} 
		} 
	} 
   return $result;
   
}
echo json_encode(listAllPosts("."));
?>