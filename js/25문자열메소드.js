console.log("테스트")
//문자열은 문자의 모임
let text = "ABCDEFG HIJ KLM OPQRSTU VWXYZ"
console.log('text 문자열의 길이:', text.length)
let result = text.at(5)
console.log('text.at(5) :', result)
console.log('text[5] :', text[5])
text[5] = '*' //값을 설정하는건 x(why 문자열은 불변값)
console.log(text)
// slice()메소드-특정 부분을 잘라내어 새로운 문자열 리턴
text = "Aple, Banana, Kiwi";
let part = text.slice(7,13);
console.log('slice(7,13) :', part)
part = text.slice(-12,-6); //마직막 값 생략하면 끝까지
console.log('slice(-12) :', part)
// substring() : slice() 와 동일 .음수 값은 사용못함.

//toLowerCase()-소문자,toUpperCase()-대문자 변환하여 리턴
console.log('소문자 변환:', text.toLocaleLowerCase())
console.log('대문자 변환:', text.toUpperCase())

// concat() : 문자열 합치기
let text1 = "Hello"
let text2 = "World"
let text3 = text.concat("🎁", text2);
console.log("concat():",text3)

//공백 삭제 할떄 쓰는 메소드 -trim(),trimStart(앞에만 공백 제거),trimStart(뒤에공백만제거)
text1 = "       Hello World      "
console.log("trim():",text1.trim().length)
console.log("trimStart():", text1.trimStart().length)
console.log("trimEnd():", text1.trimStart().length)

text = "5";
let padded = text.padEnd(4,"0"); // number 타입은 자동으로 string 변환
console.log("padEnd(4,'0'):", padded)

let num = 5
 // number 타입은 toString() 으로 문자열 변환이 필요함
padded = num.toString().padStart(4,"0")
console.log("padStart(4,'0'):", padded)

//https://www.w3schools.com/js/js_string_search.asp
//배열과 중복된 메소드만 해보세요.

//indexOf(), lastIndexOf() -2번쨰 입력값(인자)
//includes()

