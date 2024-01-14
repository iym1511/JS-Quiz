const Sol5 = () => {

  const arr = [1,2,3,2,6,2,3,5,7];

  const solution = (size,arr) => {
    let answer = Array.from({length:size}, ()=>0);

    arr.forEach(x => {
      let pos =-1
      // answer배열에 현재 arr와 같은 정수가 있나 확인 있으면 pos=i
      for(let i=0; i<size; i++) if(x===answer[i]) pos=i
      // pos가 없다면 
      if(pos === -1){
        for(let i=size-1; i>=1; i--){
          answer[i] = answer[i-1];
        }
      }else{
        // pos의 정수에 따라서 pos위치부터 -1씩내려가면서 위치변경
        for(let i=pos; i>=1; i--){
          answer[i] = answer[i-1];
        }
      }

      // 앞자리를 한칸씩 땡기니까 23100에서 02310이 되니까 비는 첫번째자리를 채움
      // ex) 62310
      answer[0] = x
    });

    // console.log(tmp)
    return answer;
  }
  console.log(solution(5,arr))
  
  return ( 
    <div>

    </div>
  );
}

export default Sol5;