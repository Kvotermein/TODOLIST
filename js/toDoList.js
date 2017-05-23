'use strict'
let monthTaskHash={};
let TasksArray=[];
let count=0;
let close = document.getElementsByClassName("close");
let uLlist= document.getElementById("myUL")
class Task {
  constructor(task,coordx,coordy,uniqNumber) {
    this.uniqNumber=uniqNumber;
    this.task = task;
    this.coordx = coordx;
    this.coordy = coordy;
  }
}
function loadall() {
  if (TasksArray.length!==0) {
    for (var i = 0; i < TasksArray.length; i++) {
      console.log(TasksArray[i])
      var li = document.createElement("li");;
      li.id = i;
      var t = document.createTextNode(TasksArray[i].task);
      li.appendChild(t);
      document.getElementById("myUL").insertBefore(li,uLlist.firstChild);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    }
  }
    for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      uLlist.removeChild(div)
      for (var i = 0; i < TasksArray.length; i++) {
        if (String(i)===div.id) {
          console.log(i)
          TasksArray.splice(i,1);
        }
      }
      console.log(TasksArray)
    }
  }
  var LiElm = document.getElementsByTagName("LI");
  for (var i = 0; i < LiElm.length; i++) {
    LiElm[i].onclick = function() {
      var div = this;
      for (var i = 0; i < TasksArray.length; i++) {
        if (String(i)===div.id) {
          console.log(i)
          var x=TasksArray[i].coordx.toFixed(6);
          var y=TasksArray[i].coordy.toFixed(6);
        setTimeout(function() { 
          map.panTo(new google.maps.LatLng(x,y));
          map.setZoom(15)
          marker.setPosition(new google.maps.LatLng(x,y));
        }, 300);
        }
      }
    }
  }
}





// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement(posX,posY) {
  var li = document.createElement("li");
  for (var i = 0; i <= TasksArray.length; i++) {
    li.id=i;
  }
  var inputValue = document.getElementById("userTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").insertBefore(li,uLlist.firstChild);
  }
  document.getElementById("userTask").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var textInTastk=li.textContent
  var textInTastklength=textInTastk.length
  var x=textInTastk.substring(0, textInTastklength - 1)

  let user = new Task (x,posX,posY,count++);
  TasksArray.push(user);
  monthTaskHash[today]=TasksArray;
  console.log(TasksArray)

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      uLlist.removeChild(div)
      for (var i = 0; i < TasksArray.length; i++) {
        if (String(i)===div.id) {
          console.log(i)
          TasksArray.splice(i,1);
        }
      }
      console.log(TasksArray)
    }
  }
  var LiElm = document.getElementsByTagName("LI");
  for (var i = 0; i < LiElm.length; i++) {
    LiElm[i].onclick = function() {
      var div = this;
      for (var i = 0; i < TasksArray.length; i++) {
        if (String(i)===div.id) {
          console.log(i)
          var x=TasksArray[i].coordx.toFixed(6);
          var y=TasksArray[i].coordy.toFixed(6);
          setTimeout(function() { 
          map.panTo(new google.maps.LatLng(x,y));
          map.setZoom(15)
          marker.setPosition(new google.maps.LatLng(x,y))
          }, 300);
        }
      }
    }
  }  
}

var tblElemTD = document.getElementsByTagName("TD");
  for (var i = 0; i < tblElemTD.length; i++) {
    tblElemTD[i].onclick = function() {
       var tblElemTD = document.getElementsByTagName("TD");
        for (var i = 0; i < tblElemTD.length; i++) {
            tblElemTD[i].style.color='rgb(149, 2, 18)';
        }
      var div = this;
      div.style.color = "blue"
      while(uLlist.firstChild) uLlist.removeChild(uLlist.firstChild);
      today=this.textContent;
      if (monthTaskHash[today]) {
        TasksArray=monthTaskHash[today]
      }
      else TasksArray=[]
      loadall()
    }
  } 


function ready() {

  var getcont=window.localStorage.getItem('lsName');
    if ( getcont ) {
    var inarr=JSON.parse(getcont)
     monthTaskHash=inarr;
     console.log(inarr);
     if (monthTaskHash[today]) {
     TasksArray=monthTaskHash[today]
     }
     else TasksArray=[]
     // monthTaskHash[today]=TasksArray;
    }
    loadall()

  }

  document.addEventListener("DOMContentLoaded", ready);

window.onbeforeunload = function() {
    for (var key in monthTaskHash) {
      if (monthTaskHash[key].length===0) {delete monthTaskHash[key]}
    }
    var arr=JSON.stringify(monthTaskHash);
        window.localStorage.setItem('lsName',arr);
};

