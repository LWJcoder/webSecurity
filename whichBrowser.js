/*
*判断是什么浏览器， 返回浏览器名称
*/

function browserIs(){

if (window.ActiveXObject){ // MSIE 6.0 or below//判断是否是IE 7以上
if (document.documentElement && typeof document.documentElement.style.maxHeight!="undefined" ){    
//判断是否是 IE 8+  
  if ( typeof document.adoptNode != "undefined") { // Safari3 & FF & Opera & Chrome& IE8           
            //MSIE 8.0  因为同时满足前两个if判断，所以//在这里是IE 8   
             }    // MSIE 7.0  否则就是IE 7
             }           
               return "msie";
               }else if (typeof window.opera != "undefined") { //Opera独占// "Opera "+window.opera.version()
return "opera";}

if (typeof window.netscape != "undefined") {
 //Mozilla 独占// "Mozilla"// 可以准确识别大版本
 if (typeof window.Iterator != "undefined") {    
  // Firefox 2 以上支持这个对象    
  if (typeof document.styleSheetSets != "undefined") { // Firefox 3 & Opera 9      
     // Firefox 3  同时满足这些条件的必然是 Firefox 3了    
      }
  }
      return "mozilla";
  }
  else if (typeof window.pageXOffset != "undefined") { 
  // Mozilla & Safari     //"Safari"   
    try{       if (typeof external.AddSearchProvider != "undefined") { 
    // Firefox & Google Chrome        
      //Google Chrome         
   return "chrome";     
     }   
       } catch (e) {        
        return "safari";     }
        }else { //unknown
        	 return "unknown";
        }
 }