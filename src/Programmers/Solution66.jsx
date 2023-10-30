// 폰켓몬
const Solution66 = () => {

  const nums = [3,3,3,2,2,2];

  function solution(nums) {
    const max = nums.length / 2; // 최대 선택 가능한 숫자 종류의 반
    // 중복 제거 (배열형태)
    const arr = [...new Set(nums)]; // .size 와 같은 역할(size : 길이 수)

    // 3 > 2 ? 2 : 3 
    return arr.length > max ? max : arr.length;
  }

  // 실패한 내 코드
  // function solution(nums){
  //   let answer = 0;
  //   let result = [];

  //   for(let i = 0; i<nums.length; i++){
  //     for(let j = i+1; j<nums.length; j++){
  //       if(nums[i] == nums[j]){
  //         if(!result.includes(nums[i])){
  //           result.push(nums[i]);
  //         }
  //       }else if(nums[i] != nums[j]){
  //         if(!result.includes(nums[i])){
  //           result.push(-1);
  //         }
  //       }

  //     }
  //   }
  //   answer = Array.from(new Set(result));
  //   return answer;
  // };

  console.log(solution(nums));

  return (  
    <div>

    </div>
  );
}

export default Solution66;