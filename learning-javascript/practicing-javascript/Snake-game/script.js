// Select the game elements
const board=document.querySelector(".board");
const startBtn= document.querySelector(".btn-start");
const restartBtn= document.querySelector(".btn-restart");

const modal= document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const endGameModal = document.querySelector(".game-over");

// Store the score and timer values
const highScoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");


// Set the size of each grid block
const blockHeight=30;
const blockWidth=30;

let highScore=localStorage.getItem("highScore") || 0;
let score=0;
let time=`00:00`;

highScoreElement.innerText=highScore;


// Calculate the number of rows and columns
const cols=Math.floor(board.clientWidth/blockWidth);
const rows=Math.floor(board.clientHeight/blockHeight);

let intervalId=null;
let timerIntervalId=null;

// Keep track of the current food position
let food={
    x:Math.floor(Math.random()*rows),
    y:Math.floor(Math.random()*cols)
    };


// Store the snake and board blocks
const blocks=[];
const snake=[{x:1,y:3}];

let direction="right";


// Create the board blocks
for(let row=0;row<rows;row++){
    for(let col=0;col<cols;col++){
    const div=document.createElement("div");
    div.classList.add("block");
    board.appendChild(div);
    blocks[`${row},${col}`]=div;
    }
}

function render(){
    let head=null;

    // Calculate the next head position
    if(direction==="left"){
        head={x:snake[0].x,y:snake[0].y-1};
    }else if(direction==="right"){
        head={x:snake[0].x,y:snake[0].y+1};
    }else if(direction==="down"){
        head={x:snake[0].x+1,y:snake[0].y};
    }else if(direction==="up"){
        head={x:snake[0].x-1,y:snake[0].y};
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols){
        // Check for a wall collision
        clearInterval(intervalId);
        clearInterval(timerIntervalId);
        modal.style.display="flex";
        startGameModal.style.display="none";
        endGameModal.style.display="flex";
        return;
    }

    // Clear the previous snake position
    snake.forEach(segment=>{ 
        const block = blocks[`${segment.x},${segment.y}`];

        block.classList.remove("fill");
        block.style.border = "";
    })

    const isEatingFood = head.x === food.x && head.y === food.y;

    if(isEatingFood){
        // Food consume logic
        blocks[`${food.x},${food.y}`].classList.remove("food");

        food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
        score+=10;
        scoreElement.textContent=score;

        if(score>highScore){
            highScore=score;
            localStorage.setItem("highScore",highScore);
        }
    }
    else{
        // Remove the tail when no food is eaten
        snake.pop();
    }

    // Add the new head
    snake.unshift(head);

    // Draw the updated snake and food
    snake.forEach(segment=>{ 
        const block = blocks[`${segment.x},${segment.y}`];
        block.classList.add("fill");
        block.style.border = "1px solid grey";
    })

    blocks[`${food.x},${food.y}`].classList.add("food");
}

function startTimer(){
    clearInterval(timerIntervalId);
    timerIntervalId = setInterval(()=>{
        let [min,sec]=time.split(":").map(Number);
        if(sec===59){
            min+=1;
            sec=0;
        }else{
            sec+=1;
        }
        time=`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
        timeElement.innerText=time;
    },1000);
}




// Change the snake direction with the arrow keys
addEventListener("keydown",(event)=>{
    if(event.key=="ArrowUp"){
        direction="up";
    }else if(event.key=="ArrowDown"){
        direction="down";
    }else if(event.key=="ArrowLeft"){
        direction="left";
    }else if(event.key=="ArrowRight"){
        direction="right";
    }
})

// Start the game when the start button is clicked
startBtn.addEventListener("click",()=>{
    clearInterval(intervalId);
    clearInterval(timerIntervalId);
    modal.style.display="none";
    intervalId = setInterval(render,300);
    startTimer();
})

// Restart the game from the game-over screen
restartBtn.addEventListener("click",restartGame);

// Reset the game state
function restartGame(){
    // Stop the previous game timer
    clearInterval(intervalId);
    clearInterval(timerIntervalId);
    // Restore the starting game state
    modal.style.display="none";
    snake.length = 0;
    snake.push({ x: 1, y: 3 });

    score=0;
    time=`00:00`;
    scoreElement.innerText=score;
    timeElement.innerText=time;
    highScoreElement.innerText=highScore;

    direction="right";
    food={
          x:Math.floor(Math.random()*rows),
          y:Math.floor(Math.random()*cols)
         };
         
    // Remove the old snake and food from the board
    Object.values(blocks).forEach(block => {
        block.classList.remove("fill", "food");
        block.style.border = "";
    });
    // Start a new game timer
    intervalId = setInterval(render,300);
    startTimer();
}