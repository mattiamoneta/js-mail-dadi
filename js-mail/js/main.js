const inputMail = prompt("Inserire email da validare: ");
const dbMail = ["mail1@example.com","mail2@example.com","mail3@example.com","mail4@example.com","mail5@example.com"];


if (inputMail != ""){

    for (let i = 0; i < dbMail.length; i++){

        if (inputMail == dbMail[i]){
            console.log("Mail Trovata!");
            break;
        } else if ((i == dbMail.length - 1) && (inputMail != dbMail[i])){
            console.log("Nessuna mail trovata");
        }

    }

} 
