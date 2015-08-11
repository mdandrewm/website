<?php
	function getPostPreview(path)
	{
		$post = fopen(path,"r") or die("Post Not Found");
		echo fread($post, filesize(path));
		fclose($post);
	}
?>