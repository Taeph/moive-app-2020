import React, { Component } from 'react';
import propTypes from 'prop-types';

// props 의 type 과 required 를 체크한다 (무조건 propTypes 로 다른 이름 불가능)
/*
Food.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
}
*/

class App extends Component {
  // 동적인 값들은 state 사용
  state = {
    count : 0
  };

  // state 는 직접 값을 변경하지 않고, setState 사용
  add = () => {
    console.log("add");
    this.setState (current => ({ count: current.count + 1}));
  };

  // minus 방식보다 add 방식이 더 좋은 방법
  minus = () => {
    const count = this.state.count;
    console.log("minus");
    this.setState ({ count: count-1});
  };

  // setState 를 호출 할 때 마다, React는 다시 render 한다.
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
