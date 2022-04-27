//level 1 참여자명단, 완주자 명단. 한 명만 완주 못함. 완주 못한 사람은? 


const solution = (participant,completion) => {
  participant.find(participant => 
    !completion[participant]--,
    completion.map(participant=>completion[participant]=(completion[participant]|0)+1))
}


function solution(participant, completion) { 
  const completeObj = {} 
  
  // 완주자 명단 만들기 
  completion.forEach(name => { 
  // 명단에 없는 이름이면 { 이름: 1 } 
  if (!completeObj[name]) completeObj[name] = 1 
  // 이미 올라간 이름이면 등장횟수++ 
  else completeObj[name]++ }) 
  // 참가자와 완주자 명단 비교 

  return participant.find(name => { 
    // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값-- 
    if (completeObj[name]) completeObj[name]-- 
    // 명단에 없거나 값이 0이면 리턴 
  else return name 
  }) 
}

//Array.prototype.find method : 주어진 판별함수를 만족하는 첫번째 요소의 값을 리턴하고 종료.
//만족하는 요소를 못찾으면 undefined가 리턴됨.

//Array.prototype.findIndex : 주어진 판별함수를 만조하는 첫 번째 요소의 인덱스 값 리턴. 없으면 -1 리턴
//indexOf , Array.includes()도 참고!

var inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }