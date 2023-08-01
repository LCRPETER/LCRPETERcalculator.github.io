function calcul(op) {
  nombre1 = document.calc.nbr1.value;
  nombre2 = document.calc.nbr2.value;
  switch (op) {
    case "add":
      resultat = parseFloat(nombre1) + parseFloat(nombre2);
      break;
    case "sou":
      resultat = nombre1 - nombre2;
      break;
    case "mul":
      resultat = nombre1 * nombre2;
      break;
    case "div": {
      if (nombre2 != 0) resultat = nombre1 / nombre2;
      else resultat = "Erreur!";
    }
  }
  document.calc.res.value = resultat;
}
