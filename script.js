//Déclaration d'une fonction
function number(){
  // Déclaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //Déclaration du regex
  var regex = /[\d]+[.][\d]+/;
  //boite de dialogue avec appel des variables
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    //Déclaration d'une variables parseInt et parseFloat
    var firstNumberInt = parseInt(firstNumber);
    var secondNumberInt = parseFloat(secondNumber);
    //Déclaration d'une variable multi
    var division = firstNumberInt % secondNumberInt;
    alert(division);
  }else{
    alert('recommencez');
  }
  }
