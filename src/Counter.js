// import React, { Component } from 'react';

// class Counter extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // state
//   //   this.state = {
//   //     number: 0,
//   //   };
//   // }

//   state = {
//     number: 0,
//   };

//   render() {
//     const { number } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 1 });
//           }}>
//           {' '}
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCRMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은<b>{state.value}</b>입니다
      </p>
      <button onClick={() => dispatch({ type: 'INCRMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECRMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
