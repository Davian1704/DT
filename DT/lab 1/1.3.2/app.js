document.getElementById("n").addEventListener('input', inputSum);

function inputSum(){
    var inputNumber = parseInt(document.getElementById("n").value);
    console.log(sum(inputNumber));
}

function sum(n){
    if (isNaN(n)){
		console.log("n is not a number");
	}
	else{
    var sum = 0;
    for (var i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
	}
}

function getFibonnaci(n){
	if(isNaN(n) || n<1 || n>10){
		return "not allowed";
	}
	else{
		var sequence = [];
		var a,b,aux;
		a=0;
		b=1;
		
		while(b<n){
			sequence.push(b);	
			aux=b;
			b=a+b;
			a=aux;
		}
		if(b==n){
			sequence.push(b);
		}
		return sequence;
	}
}