const members = [
    {
        name: "김사나",
        age: "22", address: " 경기",
        height: 160.9
    },
    {
        name: "박모모",
        age: "24", address: " 서울",
        height: 160.9
    },
    {
        name: "이다현",
        age: "27", address: " 제주",
        height: 160.9
    },
]


//5) forEach 메소드 - 배열의 요소를 하나씩 가져다가 특정한 함수를 실행.
//                   ㄴ 메소드 인자 (함수)입력 

// 메소드의 입력값 인 (인자)함수를 먼저 정의하고 함수이름 사용
function printRow(item) { //"하나씩 가져온 요소 를 item 변수에 저장 -> tr 요소에 추가"
    const tr = document.createElement('tr')
    for (let key in item) {
        const td = document.createElement('td')
        td.textContent = item[key]
        tr.appendChild(td)
 }
    return tr // for 문 {}밖에서 쓰기
}
//DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한후 에 발생.
                       //ㄴ화면에 구성 요소들이 만들어진 후에 실행
document.addEventListener('DOMContentLoaded',function(){

})
const root = document.getElementById('root')
//table 요소를 만들어서 첫번쨰 줄에 제목을 넣어 table 에 추가
const table = document.createElement('table')
table.innerHTML = `<tr>
          <th>이름</th>
          <th>나이</th>
          <th>거주지</th>
          <th>키</th>
          </tr>`
//table 을 root 요소에 추가하기
root.appendChild(table)
//   배열에 저장된 객체 요소 가각에 대해 반복 테스트

members.forEach(item => {
    //item 객체로 tr 요소 만드는 함수 호출 
    const trResult = printRow(item)
    table.appendChild(trResult)
}) // 많이 쓰이는 형식