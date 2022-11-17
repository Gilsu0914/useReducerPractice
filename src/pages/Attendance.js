import React, { useState } from 'react';

export default function Attendance() {
  const [name, setName] = useState('');

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>useReducer 학교출석부를 살펴봅시다.</h2>
      <p>총 학생수: {name} 명</p>
      <input type='text' placeholder='성명을 입력하세요' value={name} onChange={inputNameHandler} />
      <button>명단추가</button>
    </div>
  );
}
