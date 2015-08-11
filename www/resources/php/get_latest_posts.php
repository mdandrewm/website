<?php
function getLatestPosts($dir, $maxResults = 3) {
	$result = array();
	
	$cdir = scandir($dir,1);
	
	foreach ($cdir as $value) 
   { 
		if (!in_array($value,array(".",".."))) 
		{ 
			if (is_dir($dir . DIRECTORY_SEPARATOR . $value)) 
			{ 
				$result = array_merge($result, getLatestPosts($dir . DIRECTORY_SEPARATOR . $value)); 
			} 
			else if (substr($value,-5) == ".blog")
			{ 
				$result[] = $dir . DIRECTORY_SEPARATOR . $value; 
			}
			if (count($result) >= $maxResults)
			{
				$result = array_slice($result,0,3);
				break;
			}
		} 
	} 
   return $result;
   
}
echo json_encode(getLatestPosts($_SERVER["DOCUMENT_ROOT"] . "/content"));
?>