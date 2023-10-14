const Solution45 = () => {

  const t = "3141592";
  const p = "271";

  function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
      let result = t.slice(i, i + p.length);

      if (result.length === p.length && result <= p) {
        answer += 1;
      }
    }

    return answer;
  }

  console.log(solution(t, p));

  return (  
    <div>

    </div>
  );
}

export default Solution45;