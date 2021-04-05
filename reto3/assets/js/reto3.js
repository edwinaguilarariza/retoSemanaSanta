let btnPepitos = document.getElementById("btnPepitos");

const pepitos = () => {
  let edad = prompt("ingresa tu edad");

  let genero = prompt("escriba su genero: hombre o mujer");
  //let mujer = prompt("escriba su genero");

  if (edad <= 10 && edad >= 18 && genero === "mujer" && genero === "hombre") {
  } else {
    if (edad <= 10) {
      alert("reclama un jugo");
    } else {
    }
    if (edad >= 18) {
      alert("reclama una cerveza");
    } else {
    }
    if (genero === "mujer") {
      alert("reclame una  pizza Hawaiana");
    } else {
    }
    if (genero === "hombre") {
      alert("reclamar adicionalmente una porción de pizza tres carnes");
    } else {
    }
    alert(" no hay nada");
  }
};

btnPepitos.onclick = function () {
  pepitos();
};
