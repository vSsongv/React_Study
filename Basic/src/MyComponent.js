import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      {name}입니다.
      {children}의 멋진 컴포넌드
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
