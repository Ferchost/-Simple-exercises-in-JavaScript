/*var p = prompt("HOLA");


if(p == 1){
	console.log("HOLALALALA");
}
if(p == 2){
	console.log("Q pASA");
}
if (p != 1 || 2){
	console.log("Que Rayos");
}


var uno = "HOLA SOY UN UNO";
var dos = "HOLA SOY UN DOS";
var tres = 3;
var cuatro = 4;
var cinco = 5;
           
var num = [0,10,20,30,40,50];

var pal = ["Fer","nan","do"," ","SuperHacker"];


var suma = uno + ", HOLA SOY UN UNO Y MEDIO, "+ dos;




var Calificacion = prompt("Que Calificacion sacaste?")


var redondea = Math.round(Calificacion);

alert("Valor Final =  " +redondea);

*/

var Piedra = 0;
var Papel = 1;
var Tijera = 2;
var No_Existe = 3;

var usuario = prompt("Piedra = 0           Papel = 1            Tijera = 2");
if(usuario == Piedra){
	alert("Elegiste Piedra");
}
if(usuario == Papel){
	alert("Elegiste Papel");
}
if(usuario == Tijera){
	alert("Elegiste Tijera");
}



var Maquina = Math.floor(Math.random()*3);

if(Maquina == Piedra){
	alert("La Maquina Eligio Piedra");
}
if(Maquina == Papel){
	alert("La Maquina Eligio Papel");
}
if(Maquina == Tijera){
	alert("La Maquina Eligio Tijera");
}

if(Maquina == usuario){
	alert("Empate");
}

//Piedra
if(usuario == Piedra & Maquina == Tijera){
	alert("Ganaste!!");
	document.write("Ganador!!!!!!!!!!");
}
if(usuario == Piedra & Maquina == Papel){
	alert("Perdiste");
	document.write("Perdedor!!!!!!!!");
}
//Papel
if(usuario == Papel & Maquina == Tijera){
	alert("Perdiste");
	document.write("Perdedor!!!!!!!!");
}
if(usuario == Papel & Maquina == Piedra){
	alert("Ganaste!!");
	document.write("Ganador!!!!!!!!!!");
}
//Tijera
if(usuario == Tijera & Maquina == Papel){
	alert("Ganaste!!");
	document.write("Ganador!!!!!!!!!!");
}
if(usuario == Tijera & Maquina == Piedra){
	alert("Perdiste");
	document.write("Perdedor!!!!!!!!");
}









/*HOLA ESTO ES UN COMENTARIO*/ 