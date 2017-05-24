'use strict'
let UpdatePageDeb=DebounceAnimFrame(UpdatePage);
let MouseLastX;
let MouseLastY;

function Start() {

  document.body.addEventListener('mousemove',AnyMove,false);
  document.body.addEventListener('touchmove',AnyMove,false);

}

function AnyMove(EventObj) { 

  if ( EventObj.changedTouches ) {
    MouseLastX=EventObj.changedTouches[0].clientX;
    MouseLastY=EventObj.changedTouches[0].clientY;
  }
  else {
    MouseLastX=EventObj.clientX;
    MouseLastY=EventObj.clientY;
  }

  UpdatePageDeb();

  EventObj.preventDefault();

}

function UpdatePage() {

  var ShiftX=MouseLastX;
  var ShiftY=MouseLastY;

  ShiftPara('paralax',ShiftX,ShiftY,-0.01,0.01);

}

function ShiftPara(ParaId,ShiftX,ShiftY,KoefX,KoefY) {

  var ParaElem=document.getElementById(ParaId);
  ParaElem.style='background-position:'+ShiftX*KoefX+'%'+ShiftY*KoefY+'%';

}

function DebounceAnimFrame(Func) {

  var RequestAnimationFrame=
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback)
      { window.setTimeout(callback,1000/60); };

  var Timer;
  return function() {

    var context=this, args=arguments;
    if ( Timer )
      return;

    var LaterF=function() {
      Timer=null;
      Func.apply(context,args);
    };

    Timer=RequestAnimationFrame(LaterF);

  };

};
