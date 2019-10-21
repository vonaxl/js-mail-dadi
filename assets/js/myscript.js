var emailVerificato = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com", ];
var invitato;

function verifica() {
  email = document.getElementById("emailInput").value;
  console.log(email);
  for (var i = 0; i < emailVerificato.length; i++) {
    if (email==emailVerificato[i]) {
      invitato=1;
    }
  }
  if (invitato==1) {
    alert("Sei stato invitato")
  }else {
    alert("Non sei invitato")
  }
}

//
var player = Math.floor(Math.random() * 6);
console.log(player);
if (player==0) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_1.png'>";
}else if (player==1) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_2.png'>";
}else if (player==2) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_3.png'>";
}else if (player==3) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_4.png'>";
}else if (player==4) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_5.png'>";
}else if (player==5) {
  document.getElementById("playerID").innerHTML="<img src='assets/img/Alea_6.png'>";
}

var pc = Math.floor(Math.random() * 6);
console.log(pc);
if (pc==0) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_1.png'>";
}else if (pc==1) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_2.png'>";
}else if (pc==2) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_3.png'>";
}else if (pc==3) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_4.png'>";
}else if (pc==4) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_5.png'>";
}else if (pc==5) {
  document.getElementById("pcID").innerHTML="<img src='assets/img/Alea_6.png'>";
}

if (player>pc) {
  document.getElementById("winner").innerHTML="PLAYER";
}else if (player<pc) {
  document.getElementById("winner").innerHTML="PC";
}else {
  document.getElementById("winner").innerHTML="NO ONE BUT AXL";
}
