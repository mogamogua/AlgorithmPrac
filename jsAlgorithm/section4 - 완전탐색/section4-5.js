//K번 째 큰 수 
// 1~100사이의 자연수가 적힌  N장의 카드
// 같은 숫자 카드가 여러개 있을 수 있음.
//이 중 3장을 뽑아 각 카드 수의 합을 기록.
// 3장을 뽑을 수 있는 모든 경우 기록.
// 기록한 값 중 K번 째로 큰 수 출력하기.

//같은 합이 여러개일 때 K번 째 큰 수에선 하나로 취급.

// 3<=N<=100, 1<=K<=50;
function getKthLargestSum(N, K, cards) {
  let cardSum = []
  for (let i=0; i<N; i++) {
    for (let j=i+1; j<N; j++) {
      for (let k=j+1; k<N; k++) {
        cardSum.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  cardSum.sort((a, b) => (a - b))
  // cardSum.forEach((elem) => (cardSumSet.add(elem)))
  const cardSumSet = new Set(cardSum); //배열 to Set

  return Array.from(cardSumSet).splice(-K, 1);
}

const N = 10, K = 3;
const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]

console.log(getKthLargestSum(N, K, cards))