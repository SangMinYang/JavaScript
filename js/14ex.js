//4개 연산을 테스트 .console 에 결과값 출력 , 값은 789,125


let result    //전역 변수 :파일 전체에서 사용.이름이 같은 지역변수 
//               reult 와 다른 메모리공간 할당
result = calc(789,125,'+')
console.log('+',result)
console.log('-', calc(789,125,'-'))

const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click',function(){
    //입력한 3 개를 가져와서 num1 num2 op 변수저장
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    console.log('typrof:',typeof (num1), typeof (num2)) //typeo: string string
    //-,*,/ 는 연산을 위해서 자동으로 타입이 number 저장
    let num3 = document.getElementById('op').value
    //정확한 연산을 위해 string 을 number 로 변환하는 함수 사용
    let result = calc(Number(num1),Number(num2),op) //실매개변수(인자)
    //function calc(num1,num2,op)
                                 // 의 변수와 메모리 공간 다름
                                 //span#result 요소에 결과값을 출력
    document.querySelector('span#result').textContent = result
})

function calc(num1,num2,op) { //형식 매개변수(인자)
    let result=0     // 결과값 변수 (지역 변수 {} 안에 선언. {} 안에서만 사용)
    console.log('op',op)
    switch (op) {
        case '+':
            result = num1 + num2
             break
     case '-':
            result2 = num1 - num2
            break
      case '*':
            result3 = num1 * num2
            break  
      case '/':
            result4 = num1 / num2
            break
    default:
        console.error('op 는 허용되지 않는 값 입력')
         break       
    }

    return result
}

let result1
result = calc(789,125,'+')
console.log(result)
let result2
result = calc(789,125,'-')
console.log(result2)
let result3
result = calc(789,125,'*')
console.log(result3)
let result4
result = calc(789,125,'/')
console.log(result4)

