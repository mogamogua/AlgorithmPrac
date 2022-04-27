//라이캣과 자바독이 배에 타고 보니 좌석이 3개밖에 없었습니다.

// 1. 다리가 아픈 동물들이 순서대로 들어온다.
// 2. 동물들의 종류는 다음과 같다.
//     - 무척추동물, 척추동물, 어류, 양서류, 파충류, 조류, 포유류
// 3. 동물들의 '종'이 같을 경우 무릎에 앉을 수 있다. 다 회복된 동물들은 언제든지 빠질 수 있다. 무릎에 앉을 경우 1초로 카운트 한다!
// 4. 아무도 없거나, 자리가 꽉 차 있을 때 '이 종'이 들어올 경우 가장 오래 앉아있던 동물이 아닌, 
//    가장 최근에 같은 종이 한 번도 들어오지 않은 '종'이 나가게 된다. 
//    이때 자리를 깨끗하게 청소해야 해서 1분이 걸린다.
// 5. 동물(페이지)들이 아래와 같이 차례대로 들어왔을 때 전체 수행 시간(실행 시간)을 구해야 한다.

// > 여기서는 LRU(Least Resently Used) 알고리즘을 사용하겠다냥! LRU 알고리즘은 자리(페이지) 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 자리(페이지)를 제거하는 알고리즘이다
// > 한마디로 교체가 자주 이뤄지는 동물의 자리를 보존해주겠다는 것이다!

// 입력 : 
page = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류']

// 출력 :
// 5분 3초

function solution(page) {
  let requiredTime = 0;
  seat = [];
  //가장 최근에 같은 종이 들어온 자리는 맨 뒤로 옮기자.
  for (let animal of page) {
    if (seat.length < 3) { //앉을 자리가 있을 때
      if (seat.includes(animal)) {//해당 동물과 같은 종이 이미 앉아있을 때
        let seatIndex = seat.indexOf[animal]
        seat.splice(seatIndex, 1);//해당 자리를 지우고
        seat.push(animal); //맨 뒤로 옮긴다.
        requiredTime += 1; //1초만 걸린다.
      } else { //같은 종이 앉아있지 않을 때
        seat.push(animal); //가장 뒤 좌석에 넣는다.
        requiredTime += 60;
      }
    } else { //앉을 자리가 없을 때
      if (seat.includes(animal)) {//같은 종이 앉아 있을 때
        let seatIndex = seat.indexOf(animal);
        seat.splice(seatIndex, 1);
        seat.push(animal);
        requiredTime += 1;
      } else { //같은 종 없을 때
        seat.shift(); //맨 앞에 앉은 종 치우기
        seat.push(animal);
        requiredTime += 60;
      }
    } 
  }
 
  console.log( `${parseInt(requiredTime/60, 10)}분 ${requiredTime%60}초`);
  return requiredTime;
}

solution(page);

//페이지 교체 알고리즘(LRU)
// 페이지 교체 알고리즘은 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 
// 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것을 교체할지를 결정하는 방법.
// 이 알고리즘이 사용되는 시기는 페이지 부재(Page Fault)가 발생해 새로운 페이지를 적재해야 하지만 
// 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용됩니다. 
// 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 
// 페이지 부재 문제를 해결할 수 있습니다. 