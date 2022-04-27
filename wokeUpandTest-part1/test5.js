// 1. 그림자의 길이 비율이 데이터였습니다. 해당 데이터는 2진트리의 형태를 갖추고 있으며, 
//각 간선은 아래와 같이 표현됩니다.
    
    graph = {100: new Set([67, 66]),
             67: new Set([100, 82, 63]),
             66: new Set([100, 73, 69]),
             82: new Set([67, 61, 79]),
             63: new Set([67]),
             73: new Set([66]),
             69: new Set([66, 65, 81]),
             61: new Set([82]),
             79: new Set([82, 87, 77]),
             65: new Set([69, 84, 99]),
             81: new Set([69]),
             87: new Set([79, 31, 78]),
             77: new Set([79]),
             84: new Set([65]),
             99: new Set([65]),
             31: new Set([87]),
             78: new Set([87])};

    
// 2. 이 간선들을 2진 깊이우선 탐색하며 작은 값만을 선택해서, 또는 큰 값만을 선택해서 내려와야 합니다. 
// 3. 아래 결과값을 단서로 삼아 다음 미션지로 향하세요! 단, 코드로 풀어야 합니다.

//깊이 우선 탐색:stack. FILO
//큰값만 혹은 작은값만.
const start = 100

function solution(graph, start) {
  let visitedBigNum = [];
  let visitedSmallNum =[];
  let stack = [start];
  let currentNode = 0;

  let answer = []
  
  while (stack) {
    currentNode = stack.pop();
    if (!visitedBigNum.includes(currentNode)) { //방문한 숫자가 있는 경우 = 연결된 노드. 순서대로 탐색한다면 이 경우만있음.
      visitedBigNum.push(currentNode);

      //이미 방문한 노드를 제외한 노드들. 차집합계산 알아보기.
      let belowNode = new Set([...graph[currentNode]].filter(num => !(visitedBigNum.includes(num)))); 
      //해당 조건을 만족하지 않는 숫자들만 남겨서 새로운 set을 만든다.
      //이미 방문하지 않은 숫자만.
      //set은 has라는 메소드를 가진다.
      if (belowNode.size === 0) {
        break;
      }
      stack.push(Math.max(...belowNode));//가장 큰 숫자를 스택에 넣는다.
      
      console.log(`방문 : ${visitedBigNum}`)
      console.log(`stack : ${stack}`)

    }
  }
  answer.push(visitedBigNum);

  //작은숫자만
  stack = [start];
  currentNode = 0;

  while (stack) {
    currentNode = stack.pop();
    if (!visitedSmallNum.includes(currentNode)) { //방문한 숫자가 있는 경우 = 연결된 노드. 순서대로 탐색한다면 이 경우만있음.
      visitedSmallNum.push(currentNode);

      //이미 방문한 노드를 제외한 노드들. 차집합계산 알아보기.
      let belowNode = new Set([...graph[currentNode]].filter(num => !(visitedSmallNum.includes(num)))); 
      //해당 조건을 만족하지 않는 숫자들만 남겨서 새로운 set을 만든다.
      //이미 방문하지 않은 숫자만.
      //set은 has라는 메소드를 가진다.
      if (belowNode.size === 0) {
        break;
      }
      stack.push(Math.min(...belowNode));//가장 큰 숫자를 스택에 넣는다.
      
      console.log(`방문 : ${visitedSmallNum}`)
      console.log(`stack : ${stack}`)
    }
  }
  answer.push(visitedSmallNum);

  string = ''
  string += answer[0].map(num => String.fromCharCode(num));
  string += answer[1].map(num => String.fromCharCode(num));

  
  return string
}


console.log(solution(graph, start));