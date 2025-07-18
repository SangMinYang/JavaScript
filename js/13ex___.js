// 함수 정의 - 함수를 변수에 할당하는 방식은 호출(사용)하기 전에 반드시 정의
const add = () => {
  console.log(100 + 1000)
}

const sub = () => {
  return 100 - 1000;    //함수의 실행 결과를 전달하기
}

const muliply = (num1, num2) => {
  // num1, num2 : 함수 실행시 사용자가 정한 입력값을 저장하는 변수
  console.log('num1*num2 :', num1 * num2)
}

const div = (num1, num2) => {
  return num1 / num2
}


add()
add()
add()

let result = sub()      //함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈', result)
console.log('뺄셈', sub())

muliply(23, 56)    //1288   // 23, 56 은 함수 실행에 필요한 입력값
muliply(111, 23)   //2553

result = div(77, 13)
console.log('나누기:', result)
console.log('나누기:', div(77, 13))
console.log('나눈 결과 소수점:', result.toFixed(3))


