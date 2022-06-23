

//Summer/Winter Coding(~2018) 예산 문제
// d는 필요한 예산 금액이 담긴 배열

var solution=(d,b)=> d.sort((a,b)=>a-b).filter(x=> b-x>=0?(b=b-x,1):0).length
//일부러 줄여쓴,,이 코드를 풀어써보자

function solution(d, budget) {
  function filterMoney(x) {
    if (budget-x >= 0) {
      budget -= x;
      return true;
    } else {
      return false;
    }
  }

  d.sort((a,b) => a-b).filter(filterMoney(x))
}


//forEach라서 성능떨어짐
function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            answer++;    
        }

    })
    return answer;
}


//나의 작고 소중한 풀이,,
function solution(d, budget) {
  var answer = 0;
  //작은 순으로 뺀다.
  
  let acc = 0;
  d.sort((a,b) => a-b)
  
  for (let i=0; i<d.length; i++) {
      budget -= d[i];
      if (budget < 0) return i;
      else if (budget == 0) return i+1;
  }
  return d.length;
}