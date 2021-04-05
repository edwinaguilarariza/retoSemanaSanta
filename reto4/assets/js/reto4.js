let selectOrden = document.getElementById("selectOrden");
const menu = () => {
  let op = prompt(
    "seleccione uno de los platos de comida: \n 1- pechuga a la plancha : $20.000 \n 2- churrasco con papas fritas : $30.000 \n 3- pescado frito : $40.000 \n 4- arroz con pollo : $10.000 "
  );

  if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("seleccione una de las opciones");
  } else {
    if (op !== "1") {
      
    } else {
      let op = prompt(
        "desea adicionar bebidas al menu:  \n 1- cocacola: $5000 \n 2- limonada : $3.000 \n 3- jugo natural : $6.000 \n 4- tutifruti : $ 2.500"
      );
      if (op === "1") {
        alert("precio a pagar : $25.000");
      }
      if (op === "2") {
        alert("precio a pagar : $23.000");
      }
      if (op === "3") {
        alert("precio a pagar : $26.000");
      }
      if (op === "4") {
        alert("precio a pagar : $22.500");
      }
    }

    if (op !== "2") {
      
    } else {
      let op = prompt(
        "desea adicionar bebidas al menu:  \n 1- cocacola: $5000 \n 2- limonada : $3.000 \n 3- jugo natural : $6.000 \n 4- tutifruti : $ 2.500"
      );
      if (op === "1") {
        alert("precio a pagar : $35.000");
      }
      if (op === "2") {
        alert("precio a pagar : $33.000");
      }
      if (op === "3") {
        alert("precio a pagar : $36.000");
      }
      if (op === "4") {
        alert("precio a pagar : $32.500");
      }
    }

    if (op !== "3") {
      
    } else {
      let op = prompt(
        "desea adicionar bebidas al menu:  \n 1- cocacola: $5000 \n 2- limonada : $3.000 \n 3- jugo natural : $6.000 \n 4- tutifruti : $ 2.500"
      );
      if (op === "1") {
        alert("precio a pagar : $45.000");
      }
      if (op === "2") {
        alert("precio a pagar : $43.000");
      }
      if (op === "3") {
        alert("precio a pagar : $46.000");
      }
      if (op === "4") {
        alert("precio a pagar : $42.500");
      }
    }

    if (op !== "4") {
      
    } else {
      let op = prompt(
        "desea adicionar bebidas al menu:  \n 1- cocacola: $5000 \n 2- limonada : $3.000 \n 3- jugo natural : $6.000 \n 4- tutifruti : $ 2.500"
      );
      if (op === "1") {
        alert("precio a pagar : $15.000");
      }
      if (op === "2") {
        alert("precio a pagar : $13.000");
      }
      if (op === "3") {
        alert("precio a pagar : $16.000");
      }
      if (op === "4") {
        alert("precio a pagar : $12.500");
      }
    }
  }
};

selectOrden.onclick = () => {
  menu();
};
