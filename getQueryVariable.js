/*
function getQueryVariable(q,v){
  for(var e,i=0,m=q.split('&'),l=m.length ;i<l;i++){
	e=m[i].split('=');
    if(e[0]===v){return e[1];};
  };
  return false;
};
getQueryVariable(w.location.search.substring(1),n)
*/

javascript:(function(pn){
	var w=window,n=pn, r=w.queryparsed?w.queryparsed[n]:(function(q,v){
	  for(var e,i=0,m=q.split('&'),l=m.length ;i<l;i++){e=m[i].split('=');if(e[0]===v){return e[1];};};
	  return false;
	})(w.location.search.substring(1),n);
	alert(r);	
})('token');
