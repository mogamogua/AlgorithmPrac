//최소 직사각형

//나의 최종 풀이
function solution(sizes) {
  let max = [0,0];
  
  sizes.forEach(([w,h]) => {
      max = [Math.max(max[0], Math.max(w, h)), Math.max(max[1], Math.min(w,h))]
  })
  
  return max[0]*max[1];
}




//처음 풀이
function solution(sizes) {
  let max = [0,0];

  for (let i=0; i<sizes.length; i++) {
    let width = Math.max(...sizes[i]);
    let height = Math.min(...sizes[i]);
    if (width > max[0]) max[0] = width;
    if (height > max[1]) max[1] = height;
  }
  return max[0]*max[1];
}


function solution(sizes) {
  let max = [0,0];

  for (let i=0; i<sizes.length; i++) {
    max[0] = Math.max(max[0], Math.max(...sizes[i]));
    max[1] = Math.max(max[1], Math.min(...sizes[i]));
  }
  
  return max[0]*max[1];
}

function solution(sizes) {
  let max = [0,0];

  for (let i=0; i<sizes.length; i++) {
    max = [Math.max(max[0], Math.max(...sizes[i])), Math.max(max[1], Math.min(...sizes[i]))]
  }

  return max[0]*max[1];
}


