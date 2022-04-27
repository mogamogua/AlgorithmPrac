//문제2 java독과 함께!
//독들이 징검다리를 건넌다.

// 1. 각 돌들이 얼마나 버틸수 있는지 배열로 주어집니다. (내구도 0까지는 독의 몸무게를 버틸 수 있습니다. 0미만이 되면 독은 살아남지 못합니다.)
// 2. 각 독들의 개인정보가 JSON(JSON은 큰 따옴표로 묶여야 합니다. 
//**가능하다면 json을 import하여 풀어보세요!**)으로 주어집니다. 개인정보는 보호되지 않습니다.
// 3. 각 돌에 독들이 착지할 때 돌의 내구도는 몸무게만큼 줄어듭니다.
//     ex) [1,2,1,4] 각 돌마다 몸무게 1인 독 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.
// 4. 독들의 점프력이 각자 다릅니다. 
//     ex) 점프력이 2라면 2칸씩 점프하여 착지합니다.
// 각 독들은 순서대로만 다리를 건넙니다.

// 내 친구들의 몸무게, 돌의 내구도, 친구들의 점프력을 고려하여 
// 내 친구 루비독, 피치피독, 씨-독, 코볼독이 각각 다리를 건널 수 있는지 알아봐줘! 
// 친구들은 더 추가 될 수도, 덜 건널 수도 있어! => 길이가 긴 데이터도 고려하여 함수만들기
let rockDurability = [5, 3, 4, 1, 3, 8, 3]
let dogInfo = [{
      "이름" : "루비독",
      "나이" : "95년생",
      "점프력" : "3",
      "몸무게" : "4",
      },{
      "이름" : "피치독",
      "나이" : "95년생",
      "점프력" : "3",
      "몸무게" : "3",
      },{
      "이름" : "씨-독",
      "나이" : "72년생",
      "점프력" : "2",
      "몸무게" : "1",
      },{
      "이름" : "코볼독",
      "나이" : "59년생",
      "점프력" : "1",
      "몸무게" : "1",
      },
  ]

function solution(rockDurability, dogInfo) {
  //출력은 dogInfo["이름"]
  //점프력으로 어떤 돌을 뛰게 될 지 고려, 해당 돌의 내구도에서 몸무게 빼기

  result = []
  for (let dog of dogInfo) {
    let jumpPower = Number(dog["점프력"]);
    let weight = Number(dog["몸무게"]);
    let dogIndex = 0;
    //JS에서는 음수인덱스를 사용할 수 없다...
    while (dogIndex < rockDurability.length) { 
      dogIndex += jumpPower;

      //해당 독이 건넜는지 체크하는 if문을 아래에 두면 돌의 개수보다 큰 인덱스에 배열요소가 NaN으로 생겨버린다.
      // dogIndex를 먼저 체크해서 건넜는지 체크하고 다음 독으로 반복문을 넘기자
      if (dogIndex >= rockDurability.length) {
        result.push(dog["이름"]);

        console.log("성공!")
        continue;
      }
      rockDurability[dogIndex-1] = rockDurability[dogIndex-1] - weight;
      console.log(rockDurability);
      if (rockDurability[dogIndex-1] < 0) {
        console.log("풍덩");
        break;
      }
      console.log("콩");
      
    }
  }
  return result;
}

console.log(solution(rockDurability, dogInfo));
// 입력
// 돌의내구도 = [1, 2, 1, 4]
// 독 = [{
//     "이름" : "루비독",
//     "나이" : "95년생",
//     "점프력" : "3",
//     "몸무게" : "4",
//     },{
//     "이름" : "피치독",
//     "나이" : "95년생",
//     "점프력" : "3",
//     "몸무게" : "3",
//     },{
//     "이름" : "씨-독",
//     "나이" : "72년생",
//     "점프력" : "2",
//     "몸무게" : "1",
//     },{
//     "이름" : "코볼독",
//     "나이" : "59년생",
//     "점프력" : "1",
//     "몸무게" : "1",
//     },
// ]

// 출력
// 생존자 : ['씨-독']

// 입력
// 돌의내구도 = [5, 3, 4, 1, 3, 8, 3]
// 독 = [{
//     "이름" : "루비독",
//     "나이" : "95년생",
//     "점프력" : "3",
//     "몸무게" : "4",
//     },{
//     "이름" : "피치독",
//     "나이" : "95년생",
//     "점프력" : "3",
//     "몸무게" : "3",
//     },{
//     "이름" : "씨-독",
//     "나이" : "72년생",
//     "점프력" : "2",
//     "몸무게" : "1",
//     },{
//     "이름" : "코볼독",
//     "나이" : "59년생",
//     "점프력" : "1",
//     "몸무게" : "1",
//     },
// ]

// 출력
// 생존자 : ['루비독', '씨-독']