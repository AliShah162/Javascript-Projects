console.log("Welcome to Tic Tac Toe ");
let audioturn = new Audio("glass-ting-89283.mp3");
let music=new Audio('BGM.mp3')
let turn = "X";
let gameover=false;
//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
// Function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let wins=[ //ye indexes hain boxes k sb mtlb 0 index 1 index or 2 index, index k hisab se ho ra eh
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]]).innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " Won"
            document.getElementById('gifimg').style.width='277px'
            gameover=true;
        }
        
    })

}


//GAME LOGIC
music.play()
// music.volume=0.8//ye volume control krta hai
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
            }
        }
    })
})
// Reset Button Working
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    gameover = false; //Reset gameover state
    turn = "X"; //Value phr X o jaye gi
    document.getElementById('gifimg').style.width = '0px'; 
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn; //Update info section.
})
