var w = 4;
var h = 4;
var open_cnt = 0;
var prev_x = -1;
var prev_y = -1;
var card = [];

// bussy sleep
function sleep( T ){ 
  var d1 = new Date().getTime(); 
  var d2 = new Date().getTime(); 
  while( d2 < d1+1000*T ){    //T秒待つ 
    d2=new Date().getTime(); 
  } 
  return; 
} 

function init(w, h) {
  open_cnt = 0;
  prev_x = -1;
  prev_y = -1;
  card = [];
  var seq = [];
  for (var i = 0; i < w * h; i++) {
    seq.push(Math.floor(i / 2));
    console.log(seq[i]);
  }
  for (var i = 0; i < w * h; i++) {
    var r = Math.floor(Math.random() * (w * h - i));
    var temp = seq[w * h - i - 1];
    seq[w * h - i - 1] = seq[r];
    seq[r] = temp;
    console.log("r:" + r + ", i:" + (w * h - i - 1));
  }
  for (var y = 0; y < h; y++) {
    card.push(new Array());
    for (var x = 0; x < w; x++) {
      card[y].push(seq[y * w + x]);
      // console.log(card[y][x]);
    }
  }
}

function getButtonId(x, y) {
  return "button_" + x + "_" + y;
}

function addButton(w, h) {
  var objBody = document.body;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var button = document.createElement('button');
      button.innerHTML = '?';
      button.id = getButtonId(x, y);
      button.onclick = createClickCallback(x, y);
      objBody.appendChild(button);
    }
    var br = document.createElement('br');
    objBody.appendChild(br);
  }
}

function createClickCallback(x, y) {
  return function() { click(x, y); }
}

function click(x, y) {
  // console.log(getButtonId(x, y));
  var button = document.getElementById(getButtonId(x, y));
  if (button.innerHTML != "?") { return; }
  button.innerHTML = card[y][x];
  open_cnt++;
  if (open_cnt % 2 == 0) {
    var prev_button = document.getElementById(getButtonId(prev_x, prev_y));
    if (card[y][x] == card[prev_y][prev_x]) {
      // success
    } else {
      // fail
      // TODO
      button.innerHTML = "?";
      prev_button.innerHTML = "?";
      open_cnt -= 2;
    }
  } 
  prev_x = x;
  prev_y = y;
  if (open_cnt == w * h) {
    alert("Congratulations!");
  }
}


init(w, h);
addButton(w, h);
