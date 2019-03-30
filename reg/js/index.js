var qrcode = new QRCode("qrcode");

function makeCode () {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

makeCode();

var arr = [" hi"," my"," name"," is"," anudit"," nagar"];

function hi(fps){
  var i=0;
  var ev = setInterval(function(){ 
    var v= arr[i];
    console.log("made : "+v)
    qrcode.makeCode(v);
    i++;
    if(i == 6)
      clearInterval(ev);
  }, 1000/fps);
}


$("#text").keyup( function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});