import React from 'react';

export default function Students({ name, dispatch, id, isHere }) {
  //dispatch 학생명단에서 삭제
  const deleteStudent = () => {
    dispatch({ type: '학생삭제', payload: { id } });
  };

  //dispatch 학생의출석여부(isHere On/Off)
  const ToggleIsHereHandler = () => {
    dispatch({ type: '학생마크', payload: { id } });
  };

  return (
    <div>
      <span style={{ textDecoration: isHere ? 'line-through' : 'none', color: isHere ? 'gray' : 'black' }} onClick={ToggleIsHereHandler}>
        {name}
      </span>
      <button onClick={deleteStudent}>삭제</button>
    </div>
  );
}
