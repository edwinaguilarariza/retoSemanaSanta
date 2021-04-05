 let btnProm = document.getElementById("btnProm");



 const promedio = () =>{

    let prom = prompt("ingrese el promedio");
        prom = parseFloat(prom);
     
    let matricula = "1000000";
    let resultado = 0;
if (prom <= "2.9") {
    alert("no tienes descuento");
} else {
    
}if (prom >= "3" && prom <= "3.9") {
    resultado = matricula * "5" / "100" ;
} else {
    
}if (prom > "3.9" && prom <= "4.9") {
    resultado = matricula * "50" / "100" ;
}else{
    
}if (prom >= "5") {
    alert("saliste del rango de promedio");
}else{

}
alert("el descuento  es de $ " + resultado);
};
    
btnProm.onclick = () =>{
    promedio();
};
   
    







