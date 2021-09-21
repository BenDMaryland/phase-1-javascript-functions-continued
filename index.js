// Your code here
function saturdayFun(plans = 'roller-skate') {
return `This Saturday, I want to ${plans}!`
}


function mondayWork (monPlan = 'go to the office'){
    return `This Monday, I will ${monPlan}.`
}

function wrapAdjective (inner='*'){
   return function (intt) {
       
        return `You are ${inner}${intt}${inner}!`;
  }
   }
