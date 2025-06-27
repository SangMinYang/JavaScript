//함수의 기본 형식
//       데이터 입력 => 함수(실행)=> 실행결과는 출력
  //           (인자,인수)             (리턴)
//let ele = members.pop() : 입력값 없고 출력은 ele변수에 저장
//let size = members.push('사나') 입력값 '사나 ' 출력은 size 변수에 저장

//함수유형 1:인자 없다. 리턴 없다.
function add(){
    console.log(100 + 1000)
}
add()
add()
add()

//함수유형 2:인자없다. 리턴있디.
function sub(){
    return 100 + 1000;
}
let result = sub(); //함수를 호출하면 결과값을 전달 받습니다.
console.log('뺼셈',result)
console.log('뺼셈',sub)
//함수유형 2:인자있다. 리턴없디.
function multiply(num1,num2){
    console.log('num1*num2 :', num1 * num2)
    // num1,num2 함수 실행시 사용자가 정한 입력값을 저장하는 변수
}
 multiply(23,56) //함수 실행에 필요한 입력값(인자)
 multiply(111,23)


//함수유형 2:인자있다. 리턴있디.
function div(num1,num2){
    return num1 / num2;
}
result = div (77,13)
console.log('나누기:',result)
console.log('나누기:',div(77,13))
consolelog('나눈 결과 소수점:', result.toFixed(3))