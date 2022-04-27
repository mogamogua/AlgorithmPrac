//두 배열 합치기

//첫 줄에 배열의 크기 1<=N<100 입력
//두 번째 줄에 N개의 배열 원소가 오름차순으로 입력
//세 번째 줄 두 번째 배열의 크기 1<=M<=100이 입력
//네 번째 줄에 M개의 배열 원소가 오름차순으로 입력
//각 리스트의 원소는 int형 변수의 크기를 넘지 않음 (??)


//오름차순으로 정렬된 두 배열이 주어지면 두 배열을 오름차수느올 합쳐 출력

function mergeTwoArr(N, arr1, M, arr2) {
  arr1.push(...arr2)
  arr1.sort((a, b) => a-b);
  console.log(arr1)
} 

const N = 3, M = 5;
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

// mergeTwoArr(N, arr1, M, arr2)


//sort함수는 시간복잡도가 nlogn이다.. 
//two pointer 알고리즘 사용


function solution(arr1, arr2) {
  let answer = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
    answer.push(...arr1.splice(0, 1))
  } else {
    answer.push(...arr2.splice(0, 1));
  }}
  if (arr1.length == 0) {answer.push(...arr2)} else {
    answer.push(...arr1);
  } 
  return answer;
}

// console.log(solution(arr1, arr2));

console.log(arr1, arr2)

function twoPointer(arr1, arr2) {
  let answer = [];
  let i = 0; j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) answer.push(arr1[i++]);
    else 
    (answer.push(arr2[j++])) 
  }
  if (i === arr1.length) answer.push(...arr2.splice(j))
  else answer.push(...arr1.splice(i));
  return answer; 
}

console.log(twoPointer(arr1, arr2));