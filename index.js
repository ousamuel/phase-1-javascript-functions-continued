// code your solution here
function saturdayFun(act = 'roller-skate'){
  return `This Saturday, I want to ${act}!`;
}

function mondayWork(act = 'go to the office'){
  return `This Monday, I will ${act}.`;
}

function wrapAdjective(str = '*'){
  return function result(adj = 'special'){
    const first = `You are ${str}${adj}${str}!`;
    return first;
  }
  
}
console.log(wrapAdjective('??')("the best"));
