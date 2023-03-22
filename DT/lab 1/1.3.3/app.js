var counter = 0;

function printValue(divId, value) {
    document.getElementById(divId).innerHTML = value;
}
printValue("counter", 0);

document.getElementById("inc").addEventListener("click", increment);

function increment() {
    if(counter<10){
		counter++;
		printValue("counter", counter);
	}
}