function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400){
    result = 'This one is on me!';
  }
    if (feet >= 2000){
     result = 'I will gladly take your thirty bucks.';
    }
    if (feet >= 2500){
      result = 'No can do.';
    }

    return result
  }
      
    
    
  // Write your code here!


function ternaryCheckCity(isNewYorkCity){
 return (isNewYorkCity === 'NYC'? 'Ok, sounds good.' : 'No go.');
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
        default: 
        return 'Bye.'


  }
  // Write your code here!
}