'use strict'
let TasksArray=[];
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var uLlist= document.getElementById("myUL")
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    uLlist.removeChild(div)
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
  TasksArray.push(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").insertBefore(li,uLlist.firstChild);
  }
  document.getElementById("userTask").value = "";
  console.log(TasksArray)
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      uLlist.removeChild(div)
    }
  }
}

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
