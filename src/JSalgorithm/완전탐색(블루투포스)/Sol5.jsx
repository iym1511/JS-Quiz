// K번째 큰 수
const Sol5 = () => {

  const len = 10;
  const arr = [13 ,15 ,34 ,23 ,45 ,65 ,33 ,11 ,26 ,42];
  const num = 3;

  const solution = (len,arr,num) => {
    // new Set에서 add를 사용해서 추가시킨 후 큰수의 3번째니까
    // 원래 배열안에있는 정수들은 상관 x
    // let sumAry = [];
    // let sum = 0;

    // 중복을 모두 거르기 위함 
    // add 메서드 사용해도 중복은 추가안됨
    let tmp = new Set(arr);

    // len-2 를 굳이 안해도 for문에 조건에 맞지않아서 작동 안함
    for(let i=0; i<len-2; i++){
      for(let j=i+1; j<len-1; j++){
        for(let s=j+1; s<len; s++){
          tmp.add(arr[i]+arr[j]+arr[s]);
        }
      }
    }

    let a = Array.from(tmp).sort((a,b) => b-a);

    return a[num-1] ? a[num-1] : -1

  }

  console.log(solution(len,arr,num))

  return (  
    <div>

    </div>
  );
}

export default Sol5;