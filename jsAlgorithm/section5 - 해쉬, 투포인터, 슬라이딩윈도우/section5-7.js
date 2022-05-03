//아나그램

//아나그램? = 두 문자열의 알파벳 나열 순서는 다르지만 구성이 일치하는 경우
//ex) AbaAeCe, baeeACA는 아나그램이다. 
//즉, 어느 한 문자열을 재 배열해서 나올 수 있는 문자열들을 아나그램이라고한다.

//길이가 같은 두 개의 단어가 주어질 때 두 단어가 아나그램인지 판별하는 함수

//단어의 길이는 100을 넘지 않는다.
//두 단어가 아나그램이면 'YES' 아니면 'NO'

//Map을 활용해보자 .
function isAnagram(word1, word2) {
  const counter = new Map();
  for (let alphabet of word1) {
    if (counter.has(alphabet)) counter.set(alphabet, counter.get(alphabet)+1);
    else counter.set(alphabet, 1);
  }

  for (let alphabet of word2) {
    if (counter.has(alphabet)) counter.set(alphabet, counter.get(alphabet)-1);
    else return 'NO'
  }

  if ([...counter.values()].find(element => element !== 0)) return 'NO';

  return 'YES';
}

const word1 = 'AbaAeCe', word2 = 'baeeACA';
// console.log(isAnagram(word1, word2));

const word3 = 'abaCC', word4 = 'Caaab';
// console.log(isAnagram(word3, word4));


function solution(word1, word2) {
  let answer = 'YES';
  let counter = new Map();
  //counter에 각 알파벳의 개수를 저장한다.
  for (let alphabet of word1) {
    if(counter.has(alphabet)) counter.set(alphabet, counter.get(alphabet)+1)
    else counter.set(alphabet, 1);
  }
  //word2와 비교한다.
  for(let x of word2) {
    //만약 word1에 해당 알파벳이 아예 없거나, 
    //해당 알파벳이 word1보다 많다면 -> 빼려고 하는데 값이 0이라면 "NO"
    
    //여기 if문에 걸린다면 counter값을 -1로만들기 전에 걸러낼수있다.
    //길이가 같은 두 문자열을 받기 때문에, 해당 if문에서 모두 거를 수 있다.(1보다 큰 경우 생각하지 않아도 됨.)
    if(!counter.has(x) || counter.get(x) == 0) return 'NO';
    counter.set(x, counter.get(x)-1); //겹치는 알파벳의 개수를 빼준다.
  }
  return answer;
}


console.log(solution(word1, word2))
console.log(solution(word3, word4))