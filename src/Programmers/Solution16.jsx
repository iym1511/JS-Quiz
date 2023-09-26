// 배열만들기 4
// ⚠️ 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
// i에다가 더해주라해서 for문 조건에서 i++이 아닌 if조건문에서 index값을 ++해준다.
const Solution16 = () => {

  const arr = [1, 4, 2, 5, 3];
  const solution = (arr) => {
    let stk = [];
    for(let i = 0; i<arr.length;){
      if(stk.length === 0){
        stk.push(arr[i++]);
      }else if(stk[stk.length - 1] < arr[i]){
        stk.push(arr[i++]);
      }else if(stk[stk.length - 1] >= arr[i]){
        stk.pop();
      }
    }
    return stk
  }

  console.log(solution(arr));

  return (  
    <div>

    </div>
  );
}

export default Solution16;