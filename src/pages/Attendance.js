import React, { useReducer, useState } from 'react';
import Students from '../components/Students';

const initialState = {
  count: 0,
  students: [
    //id: Date.now()
    //name: name
    //isHere: true
  ],
};

//리듀서노예
const reducer = (state, action) => {
  switch (action.type) {
    case '학생추가':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case '학생삭제':
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload.id),
      };
    case '학생마크':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

export default function Attendance() {
  //학생 성명 입력값
  const [name, setName] = useState('');
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  //useReducer
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  //dispatch 학생명단에 추가
  const addStudent = () => {
    dispatch({ type: '학생추가', payload: { name } });
  };
  //+ 편하게 엔터눌러서도 추가
  const inputNameKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addStudent();
      setName('');
    }
  };

  return (
    <div>
      <h2>useReducer 학교출석부를 살펴봅시다.</h2>
      <p>총 학생수: {studentsInfo.count} 명</p>
      <input type='text' placeholder='성명을 입력하세요' value={name} onChange={inputNameHandler} onKeyPress={inputNameKeyPressHandler} />
      <button onClick={addStudent}>명단추가</button>
      <h5>출석했다면 학생이름을 클릭하여 취소선을 만들어주세요.</h5>
      {studentsInfo.students.map((student) => (
        <Students key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />
      ))}
    </div>
  );
}
