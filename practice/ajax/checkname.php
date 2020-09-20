<?php 
$name=$_GET;
$nameArry=array('jack','rose','wujunjie');
$result=in_array($name,$nameArry);
if($result){
    echo '很遗憾，用户名已被注册';
}else{
    echo '可以使用该用户名';
}
sleep(2);
?>