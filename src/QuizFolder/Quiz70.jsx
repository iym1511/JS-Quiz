const Quiz70 = () => {
  // const a = [
  //   [1, 2],
  //   [2, 4],
  // ];

  // const b = [
  //   [1, 0],
  //   [0, 3],
  // ];

  // const test = () => {
  //   for (let i of a) {
  //     for (let j in b){
  //       console.log(i[j] * b[j][j])
  //     }
  //   }
  // };

  // console.log(test());

  function solution(a, b) {
    let c = [];
    const len = a[0].length; // 2
    // 2 === 2
    if (len === b.length){
        for(let i=0; i<len; i++){
            let row = [];
            for(let j=0; j<len; j++){
                let x = 0;
                for(let k=0; k<len; k++){
                    // a,b의 정수들을 한번씩 지나가며 곱함
                    x += a[i][k]*b[k][j];
                  }
                  row.push(x);
                }
                c.push(row);
        }
        return c;
    } else {
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));

  return <div></div>;
};

export default Quiz70;
