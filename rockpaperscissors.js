
     //player input must be case insensitive so use String toLowerCase() Method
     function playerSelection() {
      let getInput = document.getElementById("playerSelection").value.toLowerCase();
      
      switch(getInput) {
       case 'paper' : 
        getInput = 'paper';
        break ;
       case  'rock' :
        getInput = 'rock';
        break ;
       case 'scissors' :
        getInput = 'scissors';
        break ;
        default: getInput = "hello" ;
        }
     
      
      
      
      
       return getInput ;
       }


 
     function getcomputerchoice() {
      let getcomputerchoice =  Math.floor(Math.random() * 3);
      
      switch(getcomputerchoice) {
      case 0:
        getcomputerchoice = "rock";
        break;
    case 1:
        getcomputerchoice = "paper";
        break;
    case 2:
        getcomputerchoice = "scissors";
        
     
     
    }
      
        return getcomputerchoice ;
           }
function gameround(playerSelection,getcomputerchoice) {
    matchresult = "" ;

   
    if (playerSelection == getcomputerchoice) {
     matchresult = "tie" ;
    
    } else {
     switch(playerSelection) {
     case "rock" :
    
 
     if (getcomputerchoice == "scissors") {
       matchresult = "Player Win" ;
     
     } else {
        matchresult = " Computer Wins";
      
      }
     break;
     case "paper" :
     if (getcomputerchoice == "rock") {
       matchresult = "Player Wins" ;
  
     } else {
        matchresult = " Computer Wins";
       
      }
     break;
     
     case  "scissors" :
     
     if (getcomputerchoice == "paper") {
       matchresult = "Player Wins" ;
     
     } else {
        matchresult = " Computer Wins";
      
      }
     return matchresult
      } //switch statement close block
  
    } // if statement close block 
let results = 'The player chose'  + ' ' + playerSelection + ' ' + 'and the computer chose' +  ' ' +    getcomputerchoice +  '   the result is a ' + '' + matchresult  ;
return results;


} // gameround function close block

document.getElementById("output").innerHTML ="results" ;


