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
