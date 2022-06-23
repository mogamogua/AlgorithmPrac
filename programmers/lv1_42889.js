//2019 Kakao blind recruiting 실패율 문제

//filter를 사용하고 2차원 배열 사용한 풀이.
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

function solution(N, stages) {
  let result = [];

  for (let stage=1; stage<=N; stage++) {
    let passed = stages.filter((elem) => elem >= stage).length; //현재 스테이지를 통과한 유저 수
    let failed = stages.filter((elem) => elem === stage).length; //현재 스테이지에 머무르고 있는 유저 수
    result.push([stage, failed/passed]); //이 때 분모가 0일 땐 NaN이 된다.
  }

  //result 내림차순 정렬
  result.sort((a,b) => b[1]-a[1]);//NaN을 제외하고 실패율이 큰 순서대로 앞으로 간다.이 때 NaN은 실패율 0과 같으므로 맨 뒤쪽으로 가는게 맞다. 
  return result.map((x) => x[0]); //stage만 남겨서 리턴한다.
}


//나의 풀이
function solution(N, stages) {
  let count = new Array(N).fill(0);
  let rate = [];
  let answer = [];
  let userLen = stages.length;
  
  for (let stage of stages) {
      if (stage > N) continue;
      count[stage-1] += 1;     
  }
  
  for (let elem of count) {
      if (elem == 0) rate.push(0) //0을 나누면 NaN이라서 따로처리
      else rate.push(elem / userLen)
      userLen -= elem
  }
  
  //max값을 찾아서 index 추가하기
  for (let i=0; i<=N; i++) {
      let max = Math.max(...rate);
      if (max == -1) break; //모든 단계 다 확인한경우 끝낸다.
      let index = rate.indexOf(max);
      rate[index] = -1; //이미 추가한 단계는 -1로.
      answer.push(index+1);
  }
  
  return answer;
}