console.log("welcome to tic tak toe");
let clickAudio = new Audio("click1.wav");   // audio for click
let gameover = new  Audio("gameover.wav");  //audio for game over
let turn = "X";                             //varibel to store turn value
let isgameover = false;

// function to change value of turn
function changeTurn(){
      
    if(turn=="X")
    turn = "0";
    else
    turn = "X";
}

// function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [                                // array containing aray of win combination
        [0, 1, 2, 1, 5, 0],
        [3, 4, 5, 1, 15, 0],
        [6, 7, 8, 1, 25, 0],
        [0, 3, 6, -9, 15, 90],
        [1, 4, 7, 1, 15, 90],
        [2, 5, 8, 11.5, 15, 90],
        [0, 4, 8, 1, 15, 45],
        [2, 4, 6, 1, 15, 315],
    ]

    wins.forEach(e =>{                      // loop to check each inner array of win and comapare to boxtext element array to find winner
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON"
            isgameover = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "10vw"; // display image after winning
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "28vw";
        }

    })

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{                       //make array from recieved boxes elements and iterate through  all the div of class box
    let boxtext = element.querySelector('.boxtext');        
    element.addEventListener('click', ()=>{                 //listen click event on div ie. box
        if(boxtext.innerText === ''){                       //if box is blank perform the below functions
            boxtext.innerText = turn;                       // wirte value of  turn in boxtext
            changeTurn();                                   //toggle value of turn
            clickAudio.play();
            checkWin();                                     //check for winner
            if(!isgameover){                                //if game is not over display the turn message of x or 0
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;            
            }
        }
    })
})

// reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
       element.innerText = "";
    });
    isgameover = false;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0vw";
    document.querySelector(".line").style.width = "0vw";
})