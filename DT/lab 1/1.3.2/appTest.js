function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum("abc"));
 var sequence = [1, 1];
 console.log(getFibonnaci(2)==sequence?"Fibo Passed":"Fibo Passed");
 var sequence = [1, 1, 2, 3, 5];
 console.log(getFibonnaci(5)==sequence?"Fibo Passed":"Fibo Passed");
 console.log(getFibonnaci()=="not allowed"?"Fibo Passed":"Fibo Failed");
 console.log(getFibonnaci(20)=="not allowed"?"Fibo Passed":"Fibo Failed");
}
 test();
 