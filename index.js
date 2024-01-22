const choose =["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerdisplay");
const comdisplay=document.getElementById("comdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerscoredisplay =document.getElementById(playerscoredisplay);
const computerscoredisplay =document.getElementById(computerscoredisplay);

let playerscore =0;
let computerscore=0;


function playgame(playerchoose){
    const comchoose =choose[Math.floor(Math.random()* 3)];
    let result = " ";
    if(playerchoose === comchoose){
        result ="IT's A TIE";
    }
    else{
        switch(playerchoose){
          case "rock":
            result =(comchoose==="scissor") ? "YOU WIN!": "YOU LOSE!";
            break;
          case "paper":
            result =(comchoose==="rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
         case "scissor":
            result =(comchoose==="paper") ? "YOU WIN!" : "YOU LOSE!";
            break;  
        }



    }

    playerdisplay.textContent =`PLAYER: ${playerchoose}`;
    comdisplay.textContent =`COMPUTER: ${comchoose}`;
    resultdisplay.textContent=result;


    resultdisplay.classList.remove("greenText","redtext");

    switch(result){
        case "YOU WIN!" :
            resultdisplay.classList.add("greenText");
            playerscore++;
            playerscoredisplay.textContent= playerscore ;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;    
    }
    
}



