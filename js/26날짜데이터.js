//html 없이 node.js 로실행 합ㄴㅣ다 

//new date()라는 클래스를 이용해서 새로운 날짜 데이터 만듭니다.
// 기본값은 오늘 날짜입니다.
//백틱 `` ${} 기호 사용하는형식은 문자열 템플릿
const today = new Date()
console.log(`현재 날짜와 시간 : ${today}`)
// Locale : 현지(국가와 언어)
console.log(`현재 날짜와 시간 : ${today.toLocaleString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleDateString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleTimeString()}`)
//표준시()
console.log(`현재 날짜와 시간(표준시) : ${today.toISOString()}`)
console.log(`현재 날짜와 시간(표준시) : ${today.toUTCString()}`)
//
console.log(today.toString())  //모든 객체내에 기본 메소드 to String
console.log(today.toDateString())  //모든 객체내에 기본 메소드 to String
console.log(today.toTimeString())

//날짜는 기본적으로 정수값 
//1970 1월1일 0시 기준으로 얼만큼 지났는지를 ms 단위로 저장.
console.log(`정수값 new Date() : ${today.getTime()}`)
let todayLong = 55 * 365 * 24 * 60 * 60 * 1000 //2024년 12월 30 오후 11:59:59.999 초
console.log(`정수값 new Date() 대략적인 값: ${todayLong}`)

//날짜 데이터에서 조작 
console.log(`today 에서 년도 추출 : ${today.getFullYear()}`)
console.log(`today 에서 월 추출 : ${today.getMonth()}`)//월은 0~11 값
console.log(`today 에서 일 추출 : ${today.getDate()}`)
console.log(`today 에서 요일 추출 : ${today.getDay()}`)//일요일(0. 0~6)

// 특정 날짜
let date1 = new Date(`2025-12-15`)
let date2 = new Date(`2025/12/15`)
let date3 = new Date(`2025.12.15`)
console.log(`date1 : ${date1}`)
console.log(`date2 : ${date2}`)
console.log(`date3 : ${date3}`)
//특정 날짜 와 시간 지정
date1 = new Date(2025, 11, 25, 11, 30, 0) //년 월(0~11까지 지정) 일 시 분 초 지정
console.log(`date1 날짜와 시간: ${date1}`)
date2 = new Date('2025-06-27T10:44:00') // 현재시간
console.log(`date2 날짜와 시간 : ${date3}`)
date3 = new Date('2025-06-27T18:30:00Z') // (Z)표준시 설정
console.log(`date3 날짜와 시간 : ${date3}`)

//Locale 정보 확인=>ko(언어)-(국가)KR
// 'en-US', 'ja-JP','fr-FR' ,'en-GB'
//27/06/2025 18:30:00
//지정된 로케일로 출력 형식이 달라진다.
console.log(`참고 : Locale 정보 ${navigator.languages}`)
console.log(`참고 : 프랑스 시간 ${date2.toLocaleString(`fr-FR`)}`)
console.log(`참고 : 미국 현지 시간 ${date3.toLocaleString(`en-US`)}`)

//날짜를 이용한 계산
date1 = new Date()
date2 = new Date(`2025-12-25`)

let diff = date2 - date1
console.log(`날짜의 뺼셈 : ${diff}ms`) //단위가 ms =>15631846760

let oneday = 24 * 60 * 60 * 1000
diff /= oneday // diff = diff / oneday
console.log(`날짜의 뺼셈 : ${diff} 일`)
//소숫점 : 반올림 , 내림 ,올림 - Mas.round() ,Mas.floor(),Mas.ceil()

console.log(`날짜의 뺼셈 : ${Math.ceil(diff)} 일`)

//날짜 변경하기 : 년도, 월,일 단위로 더하기 또는 뺴기
// today = new Date() 이미 선언된 상태
let someday = new Date()
someday.setFullYear(someday.getFullYear() + 3)
console.log(`3년후 : ${someday.toString}`)
//예시) 오늘로 부터 3년후

//예시) 오늘부터 3달후
someday = new Date()
someday.setMonth(someday.getMonth() + 3)
console.log(`3달후 : ${someday.toString}`)
//예시)오늘 부터 181 일후
someday = new Date()
someday.setDate(someday.getDate() + 181)
console.log(`181일 : ${someday.toString}`)

// input type="date" 입력 요소는 형식이 'yyyy-MM-dd'(자리수 중요)
//값을 설정할떄에는 별도의 코드 만들기
function dateInputFmt(vdate) {
    const year = vdate.getFullYear()
    const moth = (vdate.getMonth() + 1).toString().padStart(2, '0')
    const datee = vdate.getDate().toString().padStart(2, '0')


    return [year, moth, datee.join('-')]


}

console.log('dateInputFmt(new date)():', dateInputFmt(new Date()))


