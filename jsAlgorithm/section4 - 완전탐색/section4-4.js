//졸업선물

//학생들 별로 원하는 상품 - 가격, 배송비제출
//선생님은 예산이 한정됨.
//현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하기

//상품 하나를 50% 할인해서 살 수 있는 쿠폰 있음
//배송비는 할인에 포함 X

//첫줄에 N, M이 주어짐1<=N<=1000, 1<=M<=100000000
//두번 째 줄부터 N줄에 걸쳐 각 학생들이 받고싶은 상품의 가격, 배송비 입력

//상품가격, 배송비는 각각 100000을 넘지 X
//상품가격은 짝수로만 입력.

//최소 1개 이상의 상품을 살 예산이 있다.

const prices = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3]
]
const N = 5; //학생 수
const M = 28; //예산


//내가 푼 문제 : 최대 가격을 무조건 50%할인한다 : 틀릴 수 있음. 최대한 많은 선물을 사는것이중요.
//최대 가격이 아닌것을 할인해야 더 많이 살 수 있는 경우도 존재.

function getGiftCount(N, M, prices) {
  //가장 비싼 가격 찾기
  let maxPrice = 0;
  for (let price of prices) {
    if (price[0] > maxPrice) maxPrice = price[0]
  }

  //priceSum(상품가격, 배송비 합)만들기.
  const priceSum = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i][0] == maxPrice) {
      priceSum.push(prices[i][0]*0.5 + prices[i][1])
    } else {
      priceSum.push(prices[i][0] + prices[i][1]);
    }
  }
  let spentMoney = 0;
  let giftCount = 0;

  for(let i = 0; i < N; i++) {
    const min = Math.min(...priceSum);
    const minIndex = priceSum.indexOf(min);
    priceSum.splice(minIndex, 1);

    spentMoney += min;
    if (spentMoney > M) {
      return giftCount;
    } else if (spentMoney == M) {
      return ++giftCount; //후위연산자 쓰면 안된다!
    } else {
      giftCount += 1;
    }
  }
  return giftCount;
}


// console.log(getGiftCount(N, M, prices))

//for문을 돌면서 모두 할인받아보면서 몇 개를 살수있는지 체크. 가장 많이 사는 경우가 답.
function solution(N, M, prices) {
  //가격 순으로 정렬하기
  prices.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]));
  let answer = 0;
  for(let i = 0; i < N; i++) {
    //할인 받는 것 순서대로 정하기
    let restMoney = M - ((prices[i][0]*0.5) + prices[i][1]); //할인 받은 건 무조건 산다.
    //안 살 건데 할인 받을 이유가 없음
    let count = 1;
    for (let j = 0; j < N; j++) {
      if (j == i) continue;
      if ((prices[j][0] + prices[j][1]) <= restMoney) {
        restMoney -= (prices[j][0] + prices[j][1]);
        count++;
      } else {
        answer = Math.max(count, answer);
      }
    }
  }
  return answer;
}

console.log(solution(N, M, prices))