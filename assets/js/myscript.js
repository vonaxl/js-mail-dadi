var emailVerificato = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com", ];

function verifica() {
  email = document.getElementById("emailInput").value;
  console.log(email);
  for (var i = 0; i < emailVerificato.length; i++) {
    if (email==emailVerificato[i]) {
      alert("Sei invitato")
    }
  }

}
