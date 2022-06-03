//Least REcently Used (카카오 캐시 문제 변형)

//캐시 메모리는 CPU와 주기억장치 사이의 고속 임시메모리이다.
//CPU가 처리할 작업을 저장해 놓았다가 필요할 ㄸ ㅐ바로 사용하여 처리속도를 높인다.
//비싸고 용량이 작아서 효율적으로 사용해야한다.

//철수의 컴퓨터 캐시메모리 사용 규칙이 LRU 알고리즘을 따르다.
//LRU알고리즘은 가장 최근에 사용되지 않은 것을 제거하는 알고리즘이다.

//예시
//캐시 사이즈가 5, 작업이 2,3,1,6,7 순으로 저장됨
//맨 앞이 가장 최근에 쓰인 작업, 맨 뒤가 가장 오랫동안 쓰이지 않은 작업.

//Cache Miss
//해야할 작업이 캐시에 없는 상태. 2,3,1,6,7이 캐시메모리에 있는데,
// 새로운 작업인 5번을 cpu가 사용해야한다면?
//모든 작업이 뒤로 밀리고 5번이 가장 앞에 위치한다. => 5,2,3,1,6
//가장 오래된 작업은 삭제된다.

//Cache Hit
//해야할 작업이 캐시에 있는 상태.
//5,2,3,1,6상태에서 3번 작업을 cpu가 사용해야한다면
//3,5,2,1,6으로 3번이 맨 앞으로 위치하게 된다.


//입력
//캐시의 크기, CPU가 처리할 N개의 작업
//CPU가 N개의 작업을 차례로 처리하고 난 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례로 출력하기
//캐시 사이즈 S와 작업의 개수 N이 입력된다.
//이어서 N개의 작업이 배열로 입력된다.

const S = 5, N = 9;
const works = [1,2,3,2,6,2,3,5,7];

function LRU(S, works) {
  cache = [];
  for (let work of works) {
    if (cache.includes(work)) {
      //Cache Hit
      cache.splice(cache.indexOf(work), 1);
      cache.unshift(work);
    } else {
      //Cache Miss
      if (cache.length === S) {
        cache.pop();
      } 
      cache.unshift(work);
    }
  }
  return cache;
}

console.log(LRU(S, works));
