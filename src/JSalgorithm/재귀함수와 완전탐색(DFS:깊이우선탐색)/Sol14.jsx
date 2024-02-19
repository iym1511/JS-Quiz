const Sol14 = () => {

  const solution = (n, m) => {
    let answer =[];
    let tmp = Array.from({length:m}, ()=>0);
    const DFS = (L,S) => {
      if(L===m){
        answer.push(tmp.slice());
      }else{
        for(let i=S; i<=n; i++){
          console.log(L,i);
          tmp[L]=i;
          DFS(L+1, i+1);
        }
      }

    }
    DFS(0,1)

    return answer;
  }

  const a = [
    {
      id:1,
      name:'a'
    },
    {
      id:2,
      name:'b'
    },
    {
      id:3,
      name:'c'
    },
    {
      id:4,
      name:'d'
    }
  ]

  const c = {
    id:2,
    name:'zxcs'
  }

  console.log(a.filter((n) => n.id !== c.id));
  


  console.log(solution(4,2));

  return ( 
    <div>

    </div>
   );
}
 
export default Sol14;