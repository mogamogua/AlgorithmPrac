//좌표정렬

// N개의 평면상의 좌표(x,y)가 주어진다.
//모든 좌표를 오름차순으로 정렬하자.
//정렬 기준은 x값 먼저 정렬한 후, x값이 같을 때 y값 정렬한다.

//입력
//x, y는 양수
//좌표 개수는 3~100000
const coordinate = [[2,7],[1,3],[1,2],[2,5],[3,6]];
function sortCoordinate() {
  for (let i=1; i<coordinate.length; i++) {
    // let [x, y] = coordinate[i]  
    for (let j=i-1; j>=0; j--) {
      if (coordinate[j][0] > coordinate[j+1][0]) [coordinate[j], coordinate[j+1]] = [coordinate[j+1], coordinate[j]];
      if (coordinate[j][0] == coordinate[j+1][0]) {
        if (coordinate[j][1] > coordinate[j+1][1]) [coordinate[j], coordinate[j+1]] = [coordinate[j+1], coordinate[j]];
      }
    }
  }
  return coordinate
}

console.log(sortCoordinate(coordinate))