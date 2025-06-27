// 배열 메소드 연습(2)
//1. splice -기존 배열에 새로운 요소룰 추가/삭제
let fruist = ["banana","mango","orenge","apple"]

fruist.splice(2,0,"lemon")
// let position = fruist.indexOf
fruist.indexOf(3.0,"orenge")
console.log(fruist.toString)
console.log(fruist.toString)
//2 :새로운 데이터 'lemon 이추가될 위치
//0 : 삭제할 데이터 갯수
// 그뒤의 값들 : 추가될데이터
console.log(fruist.toString())//fruist 자체가 변화(요소)
fruist = ["banana","mango","orenge","apple"]
fruist.splice(1,1) //리턴이 없다.또는 사용 안한다.
//1추가될위치
//1삭제할 데이터 갯수
//추가할 값없음
console.log(fruist.toString())
//22. slice() 배열의 특정 부분을 자르기 하요 새로운 배열을 생성
fruist = ["banana","mango","orenge","apple"]
const myfruits = fruist.slice(1,3) //메소드 결과 리턴이 있다.리턴이 중요

//slce 의 입력값이 1개인 경우 -마지막 인덱스 생략(끝까지)

console.log('🎄',myfruits.toString)
//slice() 입력값이 음수인 경우 -맨뒤-1부터 접근
myfruits = first.slice(-3,-1)
console.log('🎄',myfruits.toString)

myfruits = first.slice(-1)
console.log('🎄',myfruits.toString)
// 1: 시작위치 인덱스
// 3 : 마지막 위치 인덱스 포함 x
//자리한 배열의 갯수는 = 3-1 =2 개


//3.indexof()

//4.lastIndexof()
//5.includes()
//6.find()  인자가 콜백함수 -참 또는 거짓을 리턴
//  forEach 처럼 배열 요소를 하나씩 가져외서 함수에 전달
                 //ㄴ 값,인덱스 ,원본배열 자체 전달
                 const numbers = [4,9,16,25,29];
                 let first = numbers.find(myFuction);
                 function myFuction(value,index,array){
                    return value > 18;
                 }
                 console.log('18 보다 큰 첫번쨰값 :',first)

                 first = numbers.findIndex(myFuction)
                 console.log('18 보다 큰 첫번쨰값 인덱스 :',first)

                 let last = numbers.findLast(myFuction)
                 console.log('18 보다 큰 마지막 값 :',last)

                 last = numbers.findLastIndex(myFuction)
                 console.log('18 보다 큰 마지막 값 인덱스 :',last)

                 first = numbers.findIndex(myFuction)
                 console.log('18 보다 큰 마지막 값 인덱스;',last)
                 
  //화살표 함수로 변형 (많이 쓰이는 형식 )
  first = numbers.find(value => value > 25 && value < 30)     
  console.log('18 보다 큰 첫번쨰 값 :',first)          



//7.findIndex()
//8.findLastIdex()