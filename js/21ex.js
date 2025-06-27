const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']
const schedule = [
      { time: '09:00', todo: '수업' },
      { time: '11:00', todo: '과제' },
      { time: '12:30', todo: '점심식사' },
      { time: '14:00', todo: '주간회의' },
      { time: '16:45', todo: '자료조사' },
    ];

    function printRow(item) {
      const tr = document.createElement('tr');
      for (let key in item) {
        const td = document.createElement('td');
        td.textContent = item[key];
        tr.appendChild(td);
      }
      return tr;
    }

    document.addEventListener('DOMContentLoaded', function () {
      const root = document.getElementById('root');
      const table = document.createElement('table');

      // 헤더 행 추가
      const header = document.createElement('tr');
      const th1 = document.createElement('th');
      th1.textContent = '시간';
      const th2 = document.createElement('th');
      th2.textContent = '할 일';
      header.appendChild(th1);
      header.appendChild(th2);
      table.appendChild(header);

      // 일정 행 추가
      schedule.forEach(item => {
        const trResult = printRow(item);
        table.appendChild(trResult);
      });

      root.appendChild(table); });
