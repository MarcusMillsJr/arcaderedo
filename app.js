const board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
const gameBoard = document.getElementById("game")
const boxes = gameBoard.getElementsByClassName("box")


const gameState = {
    board: board, // from above
    currentPlayer: 0 // switch to 1 when the player swaps
  }

function startGame(){
    document.getElementById("box0").innerHTML
}

function fillBoard(){
    for(i=0; i < board.length; i++) {
       boxes[i].innerHTML = board[i]
    } 
}

function movePip(){
    let wellIndex = parseInt(this.getAttribute('data-well'));
    numPips = board[wellIndex]
    board[wellIndex] = 0
    boxes[wellIndex].innerHTML = 0
    for(i = wellIndex + 1; i <= wellIndex + numPips ; i++){
        boxes[i].innerHTML = board[i] + 1;
        board[i] = board[i] + 1;
    } 
    console.log(board)
}

fillBoard()


document.getElementById("box0").addEventListener("click", movePip);
document.getElementById("box1").addEventListener("click", movePip);
document.getElementById("box2").addEventListener("click", movePip);
document.getElementById("box3").addEventListener("click", movePip);
document.getElementById("box4").addEventListener("click", movePip);
document.getElementById("box5").addEventListener("click", movePip);
document.getElementById("box6").addEventListener("click", movePip);
document.getElementById("box7").addEventListener("click", movePip);
document.getElementById("box8").addEventListener("click", movePip);
document.getElementById("box9").addEventListener("click", movePip);
document.getElementById("box10").addEventListener("click", movePip);
document.getElementById("box11").addEventListener("click", movePip);
document.getElementById("box12").addEventListener("click", movePip);
document.getElementById("box13").addEventListener("click", movePip);