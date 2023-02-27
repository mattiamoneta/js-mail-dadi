const DomUsrNumber = document.getElementById('usrNumber');
const DomSysNumber = document.getElementById('sysNumber');
const btnSend = document.getElementById('btnSend');
const msg = document.getElementById('msg');


btnSend.addEventListener('click', function(){

    const randSys = Math.floor(Math.random() * 6) + 1;
    const randUsr = Math.floor(Math.random() * 6) + 1;

    console.log(`Numero del computer: ${randSys}`);
    DomSysNumber.innerHTML = randSys;
    console.log(`Il tuo numero: ${randUsr}`);
    DomUsrNumber.innerHTML = randUsr;

    if (randSys > randUsr){
        console.log("Vince il computer!");
        msg.innerHTML = "Vince il computer!";
        
    } else if(randUsr > randSys) {
        console.log("Hai vinto!");
        msg.innerHTML = "Hai Vinto!";
        
    } else {
        console.log("Parità!");
        msg.innerHTML = "Parità!";
        
    }

});

