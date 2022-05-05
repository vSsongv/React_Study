import React, { useEffect, useReducer, useState } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState();
  // useEffect(() => {
  //   console.log('렌더링완료');
  //   console.log(name, nickname);
  // });

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <input value={name} onChange={onChange} />
      <input value={nickname} onChange={onChange} />
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
