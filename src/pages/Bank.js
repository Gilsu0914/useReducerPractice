import React, { useState, useReducer } from 'react';

//리듀서노예
const reducer = (state, action) => {
  switch (action.type) {
    case '예금':
      return state + action.payload;
    case '출금':
      return state - action.payload;
    default:
      return state;
  }
};

function Bank() {
  //1000단위 돈 입력값
  const [number, setNumber] = useState(0);
  const inputMoneyHandler = (e) => {
    setNumber(parseInt(e.target.value));
  };

  //useReducer: 출금&예금
  const initialState = 0;
  const [money, dispatch] = useReducer(reducer, initialState);

  //dispatch 예금
  const deposit = () => dispatch({ type: '예금', payload: number });
  //dispatch 출금
  const withdraw = () => dispatch({ type: '출금', payload: number });

  return (
    <div>
      <h2>useReducer은행에 오신 것을 환영합니다.</h2>
      <p>잔고는 : {money} 원</p>
      <input type='number' value={number} step='1000' onChange={inputMoneyHandler} />
      <button onClick={deposit}>예금(디파짓)</button>
      <button onClick={withdraw}>출금(윗쓰로)</button>
    </div>
  );
}

export default Bank;
