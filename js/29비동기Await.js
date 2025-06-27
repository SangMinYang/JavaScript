const REST_API_KEY = '6ffaeb5c1b266bc7e680c6b325c115bf'
const headers = {
    method: 'GET',
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` } //headers=속성
}
const query = '거북이'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

//비동기 함수의 처리를 기다려야 하는 경우를 테스트
//result,result2 변수가 fetch 실행 결과를 받기위한 예시
let result
 //fetch 비동기 함수 이므로 await로 실행완료까지 대기
 //이렇게 쓰지 맙시다. => await , then 을같이 사용하는것은 추천하지 않는다
async function lodData(){    
    await fetch(url, headers) //비동기 처리 기다리기 await 는 문법적으로는 옳지 않은 형식.
.then(response => {
    console.log('response 수신완료:', response.status)
    return response.json()
})
.then (data => {
    result = data
    return data
})
.catch(error => console.error('fetch 실패:', error))
} 
await lodData()
console.log('result:', result)
console.log('result:', result.documents[0].image_url)

// lodData().then(() => {})

  
// await lodData()

//lodData() 가 비동기 함수 가 되었으므로 then 사용하여 처리
// lodData().then( () => {


//정상적인 async/await : await 와 then() 은 함께 사용하면 중복된 의미.
let result2
async function lodData2() {
    try { 
        const response = await fetch (url, headers)
        const data = await response.json()
        console.log(data);
        result2 = data

    } catch (error) {
        console.error ('fetch 실패:', error)
    }
    
   
}
    


await lodData2()
console.log('result:', result2)
console.log('result:', result2.documents[0].image_url)

//또는 lodData2().then(( => {      }))

    