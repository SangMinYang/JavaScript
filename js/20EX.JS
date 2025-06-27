  const time = ['09:00', '11:00', '12:30', '14:00', '16:45'];
    const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사'];
    







    //비어있는 배열에 새로운 요소를 추가하는 방법 push() 메소드 활용
    const schedule1 =[]
    for(let i=0;i<time.length;i++){
      let newItem = {time: time[i],todo: todo[i]}
     //속성 이름: 값
    // schedule.push(newItem)
    }
    // 두 배열을 객체 배열로 병합
     const schedule = time.map((t, i) => ({ time: t, todo: todo[i] }));
     console.log(schedule);

    function printRow(item) {
      const tr = document.createElement("tr");
      for (let key in item) {
        const td = document.createElement("td");
        td.textContent = item[key];
        tr.appendChild(td);
      }
      return tr;
    }
    //for (let i in time) -> 0,1,2 배열 인덱스  i 저장 (비추천)
    //'DOMContentLoaded' 이벤트 사용 할떄에는 모든 이벤트 리스너를
    //DOMContentLoaded 이벤트 안에 작성 합시다
    document.addEventListener('DOMContentLoaded', function () {
      const root = document.getElementById("root");
      const table = document.createElement("table");
      const newBtn = document.getElementById('newBtn')
    newBtn.addEventListener('click',()=>{
      //입력값 가져와서 newITEM 객체만들기
      //printRow 실행하여 tr 전달 받기
      //tr을 table에 추가 
      const newTime = document.getElementById('newTime').value
      const newTodo = document.getElementById('newTodo').value
      const newItem = {time: newTime, todo:newBtn } // 새로운 일정 객체 생성
      const newTr = printRow(newItem)// printRow 새로운 일정
     
      schedule.log(newItem)  // 스케줄 배열에 새로운 일정 추가

      //스케줄 배열을 time 속성 순서대로 나열(난이도 최상)
      schedule.sort((a,b) => a.time.localeCompare(b.time))
      //   ㄴa,b는 2개의 객체 2개의 객체 time 속성 정렬
      schedule.sort((a,b) => a.todo.localeCompare(b.todo))
      //  ㄴa,b는 2개의 객체 2개의 겍체 todo 속성 정렬
      //new Tr 을 table에 추가 => 정렬된 schedul 배열로 table 다시 만들기(변경필요)
       table.appendChild(newTr)// ??
      
      // 테이블 헤더 생성
      table.innerHTML = `
        <tr>
          <th>시간</th>
          <th>할일</th>
        </tr>
      `;
    
      // 각 일정 행 추가
      schedule.forEach(item => {
        const trResult = printRow(item);
        table.appendChild(trResult);
      });

      // 테이블을 화면에 추가
      root.appendChild(table);
    });
    
    
    })
    console.log('새스케줄 추가 후 :',schedule)
    // newBtn.addEventListener 의 끝
    //document.addEventListener 의 끝
