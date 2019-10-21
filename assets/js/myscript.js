var emailVerificato = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com", ];
var error;

function verifica() {
  email = document.getElementById("emailInput").value;
  console.log(email);
  for (var i = 0; i < emailVerificato.length; i++) {
    if (email==emailVerificato[i]) {
      error=1;
    }
  }
  if (error==1) {
    alert("Sei invitato")
  }else {
    alert("Non sei invitato")
  }
}
