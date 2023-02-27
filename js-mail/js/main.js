let DomTxtMail = document.getElementById('txtEmail');
let DomResp = document.getElementById('resp');
const btnSend = document.getElementById('btnSend')

const dbMail = ["mail1@example.com","mail2@example.com","mail3@example.com","mail4@example.com","mail5@example.com"];


btnSend.addEventListener('click', function(){
    const inputMail = DomTxtMail.value;

    if (inputMail != ""){

        for (let i = 0; i < dbMail.length; i++){
    
            if (inputMail == dbMail[i]){
                console.log("Mail Trovata!");
                DomResp.innerHTML = "Mail Trovata!";
                DomResp.classList.add('dialog-success','visible');
                break;
            } else if ((i == dbMail.length - 1) && (inputMail != dbMail[i])){
                console.log("Nessuna mail trovata");
                DomResp.innerHTML = "Nessuna mail trovata";
                DomResp.classList.remove('dialog-success');
                DomResp.classList.add('dialog-error','visible');
            }
    
        }
    
    } else {
                console.log("Il campo mail non può essere vuoto");
                DomResp.innerHTML = "Il campo mail non può essere vuoto";
                DomResp.classList.remove('dialog-success');
                DomResp.classList.add('dialog-error','visible');
    }
});


