var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var s = document.createElement("SPAN");
  var t = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(t);
  list[i].appendChild(s);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var s = document.createElement("SPAN");
  var a = document.createTextNode("\u00D7");
  s.className = "close";
  s.appendChild(a);
  li.appendChild(s);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}