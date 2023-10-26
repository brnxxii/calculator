function display(value) {
  noZero()
  document.getElementById("result").value += value;
  }
function clearscreen() {
  document.getElementById("result").value = "";
 }

function calculate() {
  noZero()
  var p = document.getElementById("result").value;
  if (p === ''){
    document.getElementById("result").innerHTML = "";
    }
    else{
  var q = eval(p).toFixed(2);
  document.getElementById('result').value = q;
 }
}
function percent(){
  noZero()
  var value = document.getElementById("result").value;
  val = (value / 100).toFixed(2);
  document.getElementById("result").value = val;
}
function backspace() {
  var bckspc = document.getElementById("result").value;
  document.getElementById("result").value = bckspc.substr(0, bckspc.length -1);
}
function sqrt(){
  noZero()
  var value = document.getElementById("result").value;
  val = Math.sqrt(value).toFixed(2);
  document.getElementById("result").value = val;
}
function noZero(){
  var value = document.getElementById("result").value;
  if (value == "0" || value == "0.00" || value == Infinity){
      val = "" 
      document.getElementById("result").value = val;
  }
}








