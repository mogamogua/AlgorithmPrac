//백설공주의 일곱난장이 키의 합이 100이다.
//아홉 난쟁이 키가 주어졌을 때 백설공주의 일곱난쟁이를 찾자.

// 1 <= height <= 100
// height은 모두 다르 자연수이다. 
//가능한 정답이 여러개일때는 아무것이나 출력함.

//입력된 순으로 일곱난쟁이 키를 출력할 것
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
function solution(arr) {
  const sumTotalHeight = arr.reduce((acc, curr) => acc + curr);
  const restHeight = sumTotalHeight - 100
  console.log(restHeight)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= restHeight) continue;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] >= restHeight) continue;
      if (arr[i] + arr[j] === restHeight) {
        arr.splice(j, 1)
        arr.splice(i, 1)
        return arr
      }
    }
  }
}

console.log(solution(arr));


