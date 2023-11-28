// 최솟값 만들기
const Solution96 = () => {

  const A = [1,4,2];
  const B = [5,4,4];

  const solution = (A,B) => {
    let answer = 0;
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);

    A.forEach((a,i) => {
      answer += a*B[i]
    });

    return answer
  }


  console.log(solution(A,B));

  return (  
    <div>

    </div>
  );
}

export default Solution96;