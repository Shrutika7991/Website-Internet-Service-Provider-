
function displayPrice () {
    var content = document.getElementById("content");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var values = ['26','36','46'];
	
	three.onclick = function(){
    document.getElementById('six').innerHTML = "$" + values[0];
	}

	four.onclick = function(){
    document.getElementById('six').innerHTML = "$" + values[1];
	}

	five.onclick = function(){
    document.getElementById('six').innerHTML = "$" + values[2];
	}
	
	six.onclick = function(){
	var price1 = document.getElementById('six').innerHTML;
	sessionStorage.setItem("Price1", price1);
	window.location = "Cart.html";
	}
};

displayPrice ();

function displayPrice1 () {
    var content = document.getElementById("content-1");
    var three = document.getElementById("three-1");
    var four = document.getElementById("four-1");
	var five = document.getElementById("five-1");
	var six = document.getElementById("six-1");
	var values = ['35','45','55'];

	three.onclick = function(){
    document.getElementById('six-1').innerHTML = "$" + values[0];
	}

	four.onclick = function(){
    document.getElementById('six-1').innerHTML = "$" + values[1];
	}

	five.onclick = function(){
    document.getElementById('six-1').innerHTML = "$" +  values[2];
	}
	
	six.onclick = function(){
	var price2 = document.getElementById('six-1').innerHTML;
	sessionStorage.setItem("Price2", price2);
	window.location = "Cart.html";
	}
};

displayPrice1 ();

function displayPrice2 () {
    var content = document.getElementById("content-2");
    var three = document.getElementById("three-2");
    var four = document.getElementById("four-2");
	var five = document.getElementById("five-2");
	var six = document.getElementById("six-2");
	var values = ['45','55','65'];

	three.onclick = function(){
    document.getElementById('six-2').innerHTML = "$" + values[0];
	}

	four.onclick = function(){
    document.getElementById('six-2').innerHTML = "$" + values[1];
	}

	five.onclick = function(){
    document.getElementById('six-2').innerHTML = "$" + values[2];
	}	
	
	six.onclick = function(){
	var price3 = document.getElementById('six-2').innerHTML;
	sessionStorage.setItem("Price3", price3);
	window.location = "Cart.html";
	}
};

displayPrice2 ();

function displayPrice3 () {
    var content = document.getElementById("content-3");
    var three = document.getElementById("three-3");
    var four = document.getElementById("four-3");
	var five = document.getElementById("five-3");
	var six = document.getElementById("six-3");
	var values = ['65','75','85'];

	three.onclick = function(){
    document.getElementById('six-3').innerHTML = "$" + values[0];
	}

	four.onclick = function(){
    document.getElementById('six-3').innerHTML = "$" + values[1];
	}

	five.onclick = function(){
    document.getElementById('six-3').innerHTML = "$" + values[2];
	}
	
	six.onclick = function(){
	var price4 = document.getElementById('six-3').innerHTML;
	sessionStorage.setItem("Price4", price4);
	window.location = "Cart.html";
	}
};

displayPrice3 ();

function modal(no){
var modal = document.getElementById("modal"+ no);
var btn = document.getElementById("modal-btn" + no);
var span = document.getElementsByClassName("close" + no)[0];

btn.onclick = function(no) {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function btn1(){
	document.getElementById('1').innerHTML = "$0";
	document.getElementById('2').innerHTML = "$0";
	document.getElementById('3').innerHTML = "$0";
	document.getElementById('4').innerHTML = "$0";
	sessionStorage.clear();
}
