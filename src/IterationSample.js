import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바다' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemoved = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => {
    return (
      <li onDoubleClick={() => onRemoved(name.id)} key={name.id}>
        {name.text}
      </li>
    );
  });

  return (
    <div>
      <input value={inputText} onChange={onChange} onKeyPress={onKeyPress}></input>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>;
    </div>
  );
};

export default IterationSample;
