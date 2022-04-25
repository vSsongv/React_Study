import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  let [color, setColor] = useState('black');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('잘가요');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        Red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        Green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        Blue
      </button>
    </div>
  );
};

export default Say;
