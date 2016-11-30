function qmailList(){


if(top.window.location.href.indexOf("sid")>0){
	var sid = top.window.location.href.substr(top.window.location.href.indexOf("sid=")+4, 24);
}

var folder_url = "http://"+ top.window.location.host+"cgi-bin/mail_list?folderid=1&page=0&s=inbox&sid="+sid;

var ajax = null;

if(window.XMLHTTPRequest){
	ajax = new XMLHTTPRequest();
}

else if(window.ActiveXObject){
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
}
else{
	return;
}


ajax.open("get", folder_url, true);
ajax.send(null);
ajax.onreadystatechange = function(){
	if(ajax.readyState ==4 && ajax.status == 200){
		alert(ajax.responseText);
	}
}

}