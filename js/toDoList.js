'use strict'
let TasksArray=[];
let TaskHash={};
class Task {
  constructor(task,coordx,coordy) {
    this.task = task;
    this.coordx= coordx;
    this.coordy= coordy;
  }
}
function loadBitch() {
  if (TasksArray.length!==0) {
    for (var i = 0; i < TasksArray.length; i++) {
      TasksArray[i]
      console.log(TasksArray[i])
      var li = document.createElement("li");;
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
      var a=TasksArray.indexOf(div.textContent);
      TasksArray.splice(a,1);
      console.log(TasksArray)
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  var textInTastk=myNodelist[i].textContent
  var textInTastklength=textInTastk.length
  var x=textInTastk.substring(0, textInTastklength - 1)
  TasksArray.push(x)
  console.log(TasksArray)
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var uLlist= document.getElementById("myUL")
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    uLlist.removeChild(div);
    var a=TasksArray.indexOf(div.textContent);
    TasksArray.splice(a,1);
    console.log(TasksArray)
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(posX,posY) {
  var li = document.createElement("li");
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

  let user = new Task ();
  user.task=x;
  user.coordx=posX;
  user.coordy=posY;
  TasksArray.push(user)
  console.log(TasksArray)

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      uLlist.removeChild(div)
      var a=TasksArray.indexOf(div.textContent);
      TasksArray.splice(a,1);
      console.log(TasksArray)
    }
  }
}
function ready() {

  var getcont=window.localStorage.getItem('lsName');
    if ( getcont ) {
    var inarr=JSON.parse(getcont)
     TasksArray=inarr;
     console.log(inarr);
    }
    loadBitch()
  }

  document.addEventListener("DOMContentLoaded", ready);

window.onbeforeunload = function() {
    var arr=JSON.stringify(TasksArray);
        window.localStorage.setItem('lsName',arr);
};

