const Quiz78 = () => {
  const user_input = prompt("첫번째 음식의 개수").split(" ");
  const n = parseInt(user_input[0], 10);
  const k = parseInt(user_input[1], 10);

  // 6, 3
  const sol = (n, k) => {
    let index = 0;
    // q에 n만큼 숫자를 넣어준다.
    let q = [];
    for (let i = 0; i < n; i++) {
      // 1. 1,2,3,4,5,6 push
      q.push(i + 1);
    }

    while (q.length > 2) {
      // 5. 2 > 4 if문 작동x // 9. 4 > 3 if문 작동 // 14. 2 > 2 if문 작동 x
      if (index > q.length - 1) {
        // 순환하다 index가 q의 길이보다 클 경우에 q.length만큼 빼준다.
        // [1,2,3,4,5,6] -> 1다음 4가 빠지고 그 다음은 4+3 = 7(index : 6)이 빠져야 하는데
        // index(현재 빠져야 할 index)가 q.length보다 크므로 q.legnth, 즉 4를 빼준다.
        // 이걸 마지막 2개가 남을 때까지 반복한다. 

        // 10. 4 - 4 = 0
        index -= q.length;
        console.log(index)
      }

      // 배열의 index위치에있는것을 1개 삭제
      q.splice(index, 1); // 2. 2 3 4 5 6 // 6. 2,3,5,6 // 11. 3,5,6 // 15. 3, 5 (결과)
      console.log(q)
      index += k; // 3. 3 // 7. 5 // 12. 3
      index -= 1; // 4. 2 // 8. 4 // 13. 2
      
    }
    return q;
  };

  console.log(sol(n, k));

  return <></>;
};

export default Quiz78;
