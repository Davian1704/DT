console.log("Welcome to data transmission ");
document.getElementById("message").innerHTML = "Message from JavaScript";
var sum = 10;
var name = "Alexandru";
var isActive = true;
var user = {id: 1, name:"Andrei", age: 21, };
var user = {
 "id": 1,
 "name": "Alexandru Cristea",
 "username": "acristea",
 "email": "acristea@test.com ",
 "address": {
 "street": "Padin",
 "number": "Ap.10",
 "city": "Cluj-Napoca",
 "zipcode": "123456",
 "geo": {
 "lat": "46.783364",
 "lng": "23.546472"
 }
 },
 "phone": " 004-07xx-123456",
 "company": {
 "name": "XYZ",
 "domain": "Air Traffic Management",
 "cities": ["Cluj-Napoca", "Vienna", "Paris"]
 }
}

console.log(user.name);
console.log( user.address.geo.lat);
console.log( user.company.name);
console.dir( user.company.cities);
console.log( user.company.cities[0]);

function print(message){
	console.log(message);
}
print("hello");

var password="123456";
console.log(password=="123456"?"ALLOW":"DENY");
var password="1234567";
 if(password=="123456"){
 console.log("permission accepted");
 } else{
	console.log("permission accepted");
}

///Exercises
document.getElementById("ceva").innerHTML = "Ceva Ceva";
console.log(user.id + " " + user.name);

name=user.name;
function showAddress(){
	console.log(name==user.name?user.address:"No user with the name");
}

$("#ceva").on('click', showAddress);
