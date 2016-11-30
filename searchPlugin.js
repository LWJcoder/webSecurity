function searchPlugin(src){
//
var m = new Image();  
m.onload = function() { 
   alert(1);  
     //图片存在  
     }; 
      m.onerror = function() { 
         alert(2);    
         //图片不存在 
          };  
          m.src = src; 
          }
          //Flash Got 

var s = "chrome://flashgot/skin/icon32.png";
searchPlugin(s);