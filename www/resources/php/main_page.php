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

function getPostTitle($path)
{
	$newPath = rtrim($path,"blog") . "meta";
	$post = fopen($newPath,"r") or die("Post Not Found");
	if (($title = fgets($post)) !== false)
	{
		return $title;
	}
	else
	{
		return "Post Not Found";
	}
}

function getPostPreview($path)
{
	$post = fopen($path,"r") or die("Tagless");
	echo fread($post, filesize($path));
	fclose($post);
}

function getPostTags($path)
{
	$tags = array();
	$newPath = rtrim($path,"blog") . "meta";
	$postMeta = fopen($newPath,"r") or die("Post Not Found");
	if (($title = fgets($postMeta)) !== false)
	{
		while (($tag = fgets($postMeta)) !== false) {
			$tags[] = $tag;
		}
	}
	return $tags;
}

function renderPostPreviews()
{
	$recentFiles = getLatestPosts(".");
	foreach ($recentFiles as $post)
	{
		echo "<div>";
		echo getPostTitle($post);
		echo "</div>";
		echo "<div>";
		getPostPreview($post);
		echo "</div>";
		foreach(getPostTags($post) as $tag)
		{
			echo "<div>";
			echo $tag;
			echo "</div>";
		}
	}
}

renderPostPreviews();

?>