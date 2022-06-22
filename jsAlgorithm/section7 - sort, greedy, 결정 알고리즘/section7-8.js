//회의실 배정


//한개의 회의실이 있다. 
//n번의 회의를 하기 위해 사용표를 만들려고 한다.
// 각 회의의 시작, 끝 시간이 주어졌을 때, 회의시을 사용할 수 있는 최대의 회의 수를 출력

//단, 회의는 중단될 수 없으며 끝남과 동시에 다음 회의가 시작될 수 있다.


//입력 회의시작시간, 끝시간이 차례로 주어짐

function getMaxMeetingCount(meetings) {
  // meetings.sort(([start, end], [start2, end2]) => (end-start) - (end2-start2));
  console.log(meetings);

  for (let i=0; i <meetings.length; i++) {
    for (let j=meetings.length; j>0; j--) {
      [start1, end1] = meetings[i];
      [start2, end2] = meetings[j];
      if (end1-start1 > end2-start2) [meetings[i],meetings[i+1]] = [meetings[i+1], meetings[i]];

    }
  }
}

const meetings1 = [[1,4], [2,3], [3,5], [4,6], [5,7]];
const meetings2 = [[3,3], [1,3], [2,3]];

console.log(getMaxMeetingCount(meetings1))