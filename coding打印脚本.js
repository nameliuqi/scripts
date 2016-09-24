for(i=0;i<150;i++){
     var idObject = document.getElementById('inner-menu'); 
    if (idObject != null) 
          idObject.parentNode.removeChild(idObject); 
}

for(i=0;i<150;i++){
     var idObject = document.getElementById('top-menu'); 
    if (idObject != null) 
          idObject.parentNode.removeChild(idObject); 
}

for(i=0;i<150;i++){
     var idObject = document.getElementById('context-menu'); 
    if (idObject != null) 
          idObject.parentNode.removeChild(idObject); 
}

for(i=0;i<150;i++){
     var idObject = document.getElementById('task-creator'); 
    if (idObject != null) 
          idObject.parentNode.removeChild(idObject); 
}

paras = document.getElementsByClassName('center ng-isolate-scope cg pagination-outer clearfix');
for(i=0;i<paras.length;i++){
     //删除元素 元素.parentNode.removeChild(元素);
    if (paras[i] != null) 
          paras[i].parentNode.removeChild( paras[i]); 
}



paras = document.getElementsByClassName('ui dividing header ng-binding');
for(i=0;i<paras.length;i++){
     //删除元素 元素.parentNode.removeChild(元素);
    if (paras[i] != null) 
          paras[i].parentNode.removeChild( paras[i]); 
}