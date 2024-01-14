// 삽입정렬
const Sol4 = () => {
  const arr = [11, 7, 5, 6, 10, 9];

  // i = 1 index부터 시작
  // j = i-1 index부터 시작
  // 강의방법
  // const solution = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     let temp = arr[i],j
  //     for(j = i-1; j>=0; j--){
  //       if(arr[j] > temp) arr[j+1] = arr[j];
  //       else break;
  //     }
  //     arr[j+1]=temp;
  //   }
  //   console.log(arr)

  // };

  // 7 11 5 6 10 9
  const solution = (arr) => {
    for(let i = 1; i< arr.length; i++){
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      // arr[1] < arr[0] 실행 7, 11, 5, 6, 10, 9 break;
      // arr[2] < arr[1] 실행 7, 5, 11, 6, 10, 9
      // arr[1] < arr[0] 실행 5, 7, 11, 6, 10, 9 break;
      for(let j = i; j > 0; j--){
        if(arr[j] < arr[j-1]){
          [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
          console.log(arr,i,j)
        }else{
          // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
          break;
        }
      }
    }

  }

  console.log(solution(arr));

  return <div></div>;
};

export default Sol4;
