var colorifyIt=function(target,userOptions){


  var options={
    object:'body',
    minColorVal:200,
    maxColorVal:255,
    timeDelay:15,
    timeTransition:'5s',
    backgroundType:'colorArray',
    colorArray:["#ffa","#faf","#aff"]
  };

  var getDomObjects=function(string){
    if(string[0]=='.') return document.getElementsByClassName(string.slice(1));
    else if(string[0]=='#') return document.getElementById(string.slice(1));
    else return document.getElementsByTagName(string);
  };

  var setOptions=function(object){
    if(object==undefined)return;
    var keys=Object.keys(object)
    keys.forEach(function(key){
      options[key]=object[key];
      console.log("options:"+options[key]+"\nobject:"+object[key]);
    });
  };

  var applyBackground=function(DOMobjects,data){
    for(var i=0;i<DOMobjects.length;i++){
      DOMobjects[i].style.backgroundColor=data;
    }
  }
  var applyTransition=function(DOMobjects,data){
    for(var i=0;i<DOMobjects.length;i++){
      DOMobjects[i].style.transitionDuration=data;
    }
  }

  if(target!=undefined)options.object=target;
  // console.log(getDomObjects(target));
  setOptions(userOptions);
  console.log();


  document.addEventListener('DOMContentLoaded',function(){
    var targetDoms=getDomObjects(target);
    applyTransition(targetDoms,options.timeTransition+"s");
    // $(options.object).css("transition-duration",options.timeTransition+"s");

    var arrayCounter=0;
    setInterval(function(){
      if(options.backgroundType=='colorArray'){
        if(arrayCounter>=options.colorArray.length) arrayCounter=0;
        applyBackground(targetDoms,options.colorArray[arrayCounter]);
        // $(options.object).css("background",options.colorArray[arrayCounter]);
        console.log(options.colorArray[arrayCounter]);
        arrayCounter++;
      }
      if(options.backgroundType=='randomColor'){
        var r=Math.round(options.minColorVal+Math.random()*(options.maxColorVal-options.minColorVal));
        var g=Math.round(options.minColorVal+Math.random()*(options.maxColorVal-options.minColorVal));
        var b=Math.round(options.minColorVal+Math.random()*(options.maxColorVal-options.minColorVal));
        applyBackground(targetDoms,"rgb("+r+","+g+","+b+")");
        // $(options.object).css("background","rgb("+r+","+g+","+b+")");
        console.log("rgb("+r+","+g+","+b+")");
      }
    },options.timeDelay*1000);
  });


}
