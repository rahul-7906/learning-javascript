let score;

function resetScore(){
 let scoreStr = localStorage.getItem('Score');
 score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost: 0,
    tie: 0
};

score.displayScore = function(){
    return `No. of matches win:${score.win},lost:${score.lost},tie:${score.tie} `
};
}

resetScore();


 
 function generateComputerChoice(){
         let random = Math.random()*3;
            
        if(random>=0 && random<1){
                return 'Bat';
            }
        else if(random>=1 && random<2){
               return'Ball';
            }
        else{
                return 'Stumps';
            }
        }



 function resultMsg(userMove,computerMove){
    if(userMove=='Bat'){
        if(computerMove === 'Ball'){
            score.win++;
            return 'User won';
            }else if(computerMove === 'Stumps'){
                score.lost++;
                return 'Computer won';
            }else if(computerMove === 'Bat'){
                score.tie++;
                return 'Match tie';
            }
    }else if(userMove=='Ball'){
        if(computerMove === 'Stumps'){
             score.win++;
                 return 'User won';
            }else if(computerMove === 'Bat'){
                score.lost++;
                return 'Computer won';
            }else if(computerMove === 'Ball'){
                score.tie++;
                    return 'Match tie';
            }
    }else{
        if(computerMove === 'Bat'){
            score.win++;
            return 'User won';
        }else if(computerMove === 'Ball'){
            score.lost++;
            return 'Computer won';
        }else if(computerMove === 'Stumps'){
            score.tie++;
            return 'Match tie';    
        }
    }
 }        


 function showAlert(userMove,computerMove,winner){
    localStorage.setItem('Score',JSON.stringify(score)); 
    document.getElementById('scoreDisplay').textContent = score.displayScore();
    alert(`You choose ${userMove}.Computer choose ${computerMove}. 

        ${winner}
        
     win:${score.win},lost:${score.lost},tie:${score.tie}
        `);   

       
 }
