

//카카오의 검색 open api 활용
//위의 문서를 보고 필요한 값 설정


const REST_API_KEY = '6ffaeb5c1b266bc7e680c6b325c115bf'
const header = {
    method: 'GET',
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` } //headers=속성
}
const query = '거북이'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`
                                                        //숙제 동영상 받아오기

// 요철 을 보내는 JS 명령어
let result
fetch(url, header)   //요청 url 주소 보내기
    .then(response => {   //요청에 대한 응답 수신 .콜백함수 인자 respose 저장
        // console.log(respose)
        return response.json()
    })

    .then(data => {   //위의 then 에서 리턴한 콜뱃함수 인자 data 저장
        result = data
        console.log('data :', data)

        console.log('데이터 분해 1:', data.documents[0])
        console.log('데이터 분해 2:', data.documents[0].doc_url)
        console.log('데이터 분해 3:', data.documents[0].image_url)
        printImage(data.documents, 10,10)  //data 배열에서 10개의 image 출력하기
    })
    .catch(error => {   //요청 에러 처리 에러정보 콜백함수 인자  error 저장
        console.error('fetch 에러:'+ error)
    })

function printImage(docs,pos, count) {  //임의로 정한 변수
    const ul = document.getElementById('kakaoImg')
    for (let i = pos; i <pos + count; i++) {
         console.log(docs[i].image_url)
        const li = document.createElement('li')
        li.innerHTML = `<img src ="${docs[i].image_url}" width="400px" height="400px">`
        ul.appendChild(li)
    }}

console.log('응답 데이터:', result)   //undefind 
//패치 요청이 응답을 받고 끝날떄까지 기다리지 않고
// 다음 콘솔 명령이 실행(비동기 처리 명령어)

//status :200 (정상 응답)
//body: ReadableStream 데이타 (본문)

