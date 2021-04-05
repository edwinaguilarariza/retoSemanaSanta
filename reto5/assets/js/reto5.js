let btnclick = document.getElementById("btnclick");



const mostMulti = () => {

  let op = prompt("digite un numero del 1 al 10 :  \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 "); 
  
  if (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5" && op !== "6" && op !== "7" && op !== "8" && op !== "9" && op !== "10") {
    alert("seleccione una de las opciones");
  } else {
    if (op !== "1") {
     
    }else{
      alert("tabla de miltiplicar del 1: 1x1 , 1x2 , 1x3 , 1x4 , 1x5 , 1x6 , 1x7 , 1x8 , 1x9 ,1x10");
    }

    if (op !== "2") {
    
    }else{
      alert("tabla de miltiplicar del 2 : 2x1 , 2x2 , 2x3 , 2x4 , 2x5 , 2x6 , 2x7 , 2x8 , 2x9 ,2x10");
    }

    if (op !== "3") {
      
    }else{
      alert("tabla de miltiplicar del 3 : 3x1 , 3x2 , 3x3 , 3x4 , 3x5 , 3x6 , 3x7 , 3x8 , 3x9 , 3x10");
    }

    if (op !== "4") {
      
    }else{
      alert("tabla de miltiplicar del 4 : 4x1 , 4x2 , 4x3 , 4x4 , 4x5 , 4x6 , 4x7 , 4x8 , 4x9 , 4x10");
    }

    if (op !== "5") {
      
    }else{
      alert("tabla de miltiplicar del 5 : 5x1 , 5x2 , 5x3 , 5x4 , 5x5 , 5x6 , 5x7 , 5x8 , 5x9 , 5x10");
    }

    if (op !== "6") {
      
    }else{
      alert("tabla de miltiplicar del 6 : 6x1 , 6x2 , 6x3 , 6x4 , 6x5 , 6x6 , 6x7 , 6x8 , 6x9 , 6x10");
    }

    if (op !== "7") {
      
    }else{
      alert("tabla de miltiplicar del 7 : 7x1 , 7x2 , 7x3 , 7x4 , 7x5 , 7x6 , 7x7 , 7x8 , 7x9 , 7x10");
    }

    if (op !== "8") {
      
    }else{
      alert("tabla de miltiplicar del 8 : 8x1 , 8x2 , 8x3 , 8x4 , 8x5 , 8x6 , 8x7 , 8x8 , 8x9 , 8x10");
    }

    if (op !== "9") {
      
    }else{
      alert("tabla de miltiplicar del 9 : 9x1 , 9x2 , 9x3 , 9x4 , 9x5 , 9x6 , 9x7 , 9x8 , 9x9 , 9x10");
    }

    if (op !== "10") {
      
    }else{
      alert("tabla de miltiplicar del 10 : 10x1 , 10x2 , 10x3 , 10x4 , 10x5 , 10x6 , 10x7 , 10x8 , 10x9 , 10x10");
    }
    
  }



  let num1 = prompt("digite  primer numero para multiplicar");

   




  let num2 = prompt("digite segundo numero para multilicar");


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let resultado = num1 * num2;

  if (op !== "1" && op !== "2" && op !== "3" && op !== "4"  && op !== "5" && op !== "6" && op !== "7" && op !== "8" && op !== "9" && op !== "10" ) {
    alert("seleccione una de las opciones");
    resultado = num1 * num2;
  }else{
      alert("el resultado es " + resultado);
  }


};

btnclick.onclick = () => {
  mostMulti();
};
  

  



    



 
 
  
  
  
  
