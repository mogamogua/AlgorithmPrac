
// 자연수가 들어있는 배열 arr가 매개변수로 주어집니다. 
//배열 arr안의 숫자들 중 앞에 있는 숫자들부터 뒤에 나타나는 숫자들 중복 횟수를 계산해서 배열로 return
//만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.

// ▶입출력 예 #1
// arr = [1, 2, 3, 3, 3, 3, 4, 4]에서 3은 4번, 4는 2번씩 나타나므로 [4, 2]를 반환합니다.
 

// ▶입출력 예 #2
// arr = [3, 2, 4, 4, 2, 5, 2, 5, 5]이면 2가 3회, 4가 2회, 5가 3회 나타나므로 [3, 2, 3]를 반환합니다.


// ▶입출력 예 #3
// [3, 5, 7, 9, 1]에서 중복해서 나타나는 숫자는 없으므로 [-1]을 반환합니다.
 

// ##### 제한사항
// - 배열 arr의 길이는 1 이상 100 이하의 자연수입니다.
// - 배열 arr의 원소는 1 이상 100 이하의 자연수입니다.
 

// 본 프로그래밍 문항의 해설은 6월 14일(목)에 본 edwith 자가진단 페이지를 통해 공개 됩니다. 
// 해설을 보기 전에 스스로 처음부터 문제를 해결할수 있는지 점검해보세요

function solution(arr) {
  let map = new Map();
  for (let num of arr) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  let result = [...map.values()].filter(x => x>1);
  if (result.length === 0) return -1;
  return result; 
}

const arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
const arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
const arr3 = [3, 5, 7, 9, 1];

console.log(solution(arr1))
console.log(solution(arr2))
console.log(solution(arr3))