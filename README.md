# webSecurity
网页安全《白帽子讲web安全》读书笔记
1，构建post，get请求：
var ajax = null;if(window.XMLHttpRequest){   
ajax = new XMLHttpRequest();   
}else if(window.ActiveXObject){   
ajax = new ActiveXObject("Microsoft.XMLHTTP");  
}else{   
return;   }
ajax.open("GET", folder_url, true);
ajax.send(null);

ajax.onreadystatechange = function(){
 if (ajax.readyState == 4 && ajax.status == 200){        
 alert(ajax.responseText);      
 //document.write(ajax.responseText)     
 }  }       　

##注入
###类似于sdql注入，在输入内容上动手脚，然后造成标签闭合的现象，再写入恶意 的js；
例如：
``<input type="text" value="$var">
``
输入的内容如果是
``" onclick = "javascript_function()" >``
在遇到有字符限制的情况下，可以将两个input之间的内容注释掉， 再在之间构建恶意的js

``<input type="text" value="" <!-->``
``...
``
``<input type="text" value="" --> onclick="function eval()" >``
还看到MySpace的蠕虫的构建方式， 其中的方法也真是巧妙地避开了所有的限制规则：
比如限制了 javascript，onreadystatechange等等关键字以及 iframe， script，style等等标签；
但是，这并不表明木有漏洞了；
其中， 可以使用拼接字符串的方式，将字符串拼接起来：
``<input type="text" value="" style="background:url(expr)" expr="document.getElementById('id').onready"+"statechange">``
