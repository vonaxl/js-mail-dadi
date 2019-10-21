var emailVerificato = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com", ];
var email = prompt("Inserisci la tua email = ");
var emailInvitato;

for (var i = 0; i < emailVerificato.length; i++) {
  console.log(emailVerificato[i]);
  if (email==emailVerificato[i]) {
    alert("Sei stato invitato")
  }
}
