'use strict'
let TasksArray=[];
function loadBitch() {
  if (TasksArray.length!==0) {
    for (var i = 0; i < TasksArray.length; i++) {
      TasksArray[i]
      var li = document.createElement("li");;
      var t = document.createTextNode(TasksArray[i]);
      li.appendChild(t);
      document.getElementById("myUL").insertBefore(li,uLlist.firstChild);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
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
function newElement() {
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
  TasksArray.push(x)
  // TasksArray.push(li.textContent);
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

// function start() {
// var StoredName=window.localStorage.getItem('lsName');
// if ( StoredName )
//     document.getElementById('IName').value=StoredName;

// var StoredAge=window.localStorage.getItem('lsAge');
// if ( StoredAge )
//     document.getElementById('IAge').value=StoredAge;
// }

// function Store()
// {
//     window.localStorage.setItem('lsName',document.getElementById('IName').value);
//     window.localStorage.setItem('lsAge',document.getElementById('IAge').value);
// }
//     var BeatlesH=
//     {
//         name : 'Beatles',
//         members : [ 'McCartney', 'Lennon', 'Harrison', 'Starr' ],
//         albums:
//         [
//             { name : 'Please Please Me', year : 1963 },
//             { name : 'With The Beatles', year : 1963 },
//             { name : "A Hard Day's Night", year : 1964 }
//         ]
//     };

//     var Beatles2H=JSON.parse(JSON.stringify(BeatlesH));

//     Beatles2H.name="The Beatles";
//     Beatles2H.members[1]='John Lennon';

//     console.log( BeatlesH );
//     console.log( Beatles2H );
