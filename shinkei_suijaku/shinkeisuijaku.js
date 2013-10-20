var w = 4;
var h = 4;
var card = [];

function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}

function init(w, h) {
  var seq = [];
  for (var i = 0; i < w * h; i++) {
    seq.push(Math.floor(i / 2));
  }
  for (var i = 0; i < w * h; i++) {
    var r = Math.floor(Math.random() * (w * h - i));
    swap(seq[w * h - i - 1], seq[r]);
  }
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      // TODO 
    }
  }
}

function addButton(w, h) {
  var objBody = document.body;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var button = document.createElement('button');
      button.innerHTML = '?';
      button.onClick = click(x, y);
      objBody.appendChild(button);
    }
    var br = document.createElement('br');
    objBody.appendChild(br);
  }
}

function click(x, y) {
  // TODO 
}


init(w, h);
addButton(w, h);
