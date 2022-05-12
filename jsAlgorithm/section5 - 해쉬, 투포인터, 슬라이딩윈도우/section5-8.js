//모든 아나그램찾기(해쉬, 투포인터, 슬라이딩 윈도우)

//S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램 만들기.
//아나그램 판별시 대소문자 구별해야함.
//부분 문자열은 연속된 문자열이여야함

//S 문자열의 길이는 10000을 넘지 않음.
//T 문자열은 S문자열보다 길이가 작거나 같습니다.

//S단어에 T문자열과 아나그램이 되는 부분문자열의 개수 출력

function strCountToMap(string) {
  const map = new Map();
  for (let elem of string) {
    if (map.has(elem)) map.set(elem, map.get(elem)+1);
    //map.get(elem) !== undefined 대신 map.has(elem)으로 작성할 수 있다.
    else map.set(elem, 1);
  }
  return map;
}

function countAnagrams(S, T) {
  let answer = 0;
  const tMap = strCountToMap(T);
  const wordLen = tMap.size
  for (let i=0; i+wordLen<=S.length; i++) {
    let j = i+wordLen;
    const sMap = strCountToMap(S.slice(i, j))

    if (sMap.size !== tMap.size) continue;
    
    sameCount = 0;
    [...sMap.entries()].forEach(([key, value]) => {
      if (tMap.get(key) == value) sameCount++;
    })
    if (sameCount === wordLen) answer++; 
    console.log(sMap.entries()) 
  }
  return answer;
}

const S = 'bacaAacba', T = 'abc';
// console.log(countAnagrams(S, T));





//solution
function compareMaps(map1, map2) { //두 맵을 비교하여 아나그램인지 판별하는 함수
  if (map1.size !== map2.size) return false;//두 맵 크기가 다르면 아나그램이 아니다.
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key)!==val) return false; //map2의 key(문자)가 없거나, 나온 회수가 다른경우 아나그램이 아니다.
  }
  return true; // 위의 조건에서 false가 아닌경우 아나그램이다.
}

function strToMap(string) {
  const map = new Map();
  for (let elem of string) {
    if (map.has(elem)) map.set(elem, map.get(elem)+1);
    else map.set(elem, 1);
  }
  return map;
}
 
function solution(S, T) {
  let answer = 0;
  let tMap = strToMap(T);
  let wordLen = T.length-1;


  let i =0;
  let sMap = strToMap(S.slice(i, i+wordLen));
  console.log(sMap, '초기sMap')

  let left=0;
  for (let right=wordLen; right<S.length; right++) {
    if (sMap.has(S[right])) sMap.set(S[right], sMap.get(S[right])+1);
    else sMap.set(S[right], 1);
    if (compareMaps(sMap, tMap)) answer++ // 두 맵을 비교했을 때 아나그램이면 +1
    
    sMap.set(S[left], sMap.get(S[left])-1); //left를 오르쪽으로 옮기기 위해 기존 맵에서 해당 value-1한다.
    if(sMap.get(S[left])===0) sMap.delete(S[left]); //지우고 나서 0이되면 아예 해당 key를 없앤다(size에영향을 주므로)
    left++; //left를 오르쪽으로 옮긴다.right는 for문에 의해 오른쪽으로
    console.log(sMap)
  }
  return answer;
}

console.log(solution(S, T), 'solution');