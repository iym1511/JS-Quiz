// 공주 구하기(큐)
const Sol6 = () => {

  const h = 8;
  const num = 3;

  const solution = (h,num) => {
    let answer;
    // [1,2,3,4,5,6,7,8]
    // 길이가 8자리인 유사배열객체 (index가0부터이니 +1)
    let queue = Array.from({length:h}, (v,i) => i+1);
    while(queue.length){
      for(let i=1; i<num; i++){
        queue.push(queue.shift())
      }
      // for문에서 두개는 앞에서 뒤쪽으로 빼주고
      // 3번째는 for문밖에서 삭제 처리
      queue.shift();
      // queue.length가 0 이면 종료기때문에 마지막 배열을 제거해주고 결과로
      // answer로 넘김
      if(queue.length === 1) answer = queue.shift();
    }

    return answer;
  }

  console.log(solution(h,num))

  return <div></div>;
};

export default Sol6;
