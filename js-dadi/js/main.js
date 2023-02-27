const randSys = Math.floor(Math.random() * 6) + 1;
const randUsr = Math.floor(Math.random() * 6) + 1;

console.log(`Numero del computer: ${randSys}`);
console.log(`Il tuo numero: ${randUsr}`);

if (randSys > randUsr){
    console.log("Vince il computer!");
} else if(randUsr > randSys) {
    console.log("Hai vinto!");
} else {
    console.log("Parità!");
}