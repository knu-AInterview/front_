// import React, { Component } from 'react';
// import { Button, ButtonGroup } from 'reactstrap';

// class Example extends Component {
//   constructor (props) {
//     super(props);

//     this.state = { cSelected: [] };

//     this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
//     this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
//   }

//   onRadioBtnClick(rSelected) {
//     this.setState({ rSelected });
//   }

//   onCheckboxBtnClick(selected) {
//     const index = this.state.cSelected.indexOf(selected);
//     if (index < 0) {
//       this.state.cSelected.push(selected);
//     } else {
//       this.state.cSelected.splice(index, 1);
//     }
//     this.setState({ cSelected: [...this.state.cSelected] });
//   }

//   render() {
//     return (
//       <div>
//         <h5>Radio Buttons</h5>
//         <ButtonGroup>
//           <Button color="primary" onClick={() => this.onRadioBtnClick('A')} active={this.state.rSelected === 1}>A</Button>
//           <Button color="primary" onClick={() => this.onRadioBtnClick('B')} active={this.state.rSelected === 2}>B</Button>
//           <Button color="primary" onClick={() => this.onRadioBtnClick('C')} active={this.state.rSelected === 3}>C</Button>
//         </ButtonGroup>
//         <p>Selected: {this.state.rSelected}</p>
//       </div>
//     );
//   }
// }

// export default Example;

import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

function Example({selectedDifficulty, setSelectedDifficulty }) {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const difficultyLevelToText = {
    1: 'Hard',
    2: 'Medium',
    3: 'Easy',
  }
  const onDifficultyBtnClick = (selected) => {
    setSelectedDifficulty(selected); // 선택한 값을 상태로 업데이트
  };
  return (
    <div>
      <h5>Level of difficulty</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => onDifficultyBtnClick(1)}
          active={selectedDifficulty === 1}
        >
          Hard
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onDifficultyBtnClick(2)}
          active={selectedDifficulty === 2}
        >
          Medium
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onDifficultyBtnClick(3)}
          active={selectedDifficulty === 3}
        >
          Easy
        </Button>
      </ButtonGroup>
      <p>Selected: {difficultyLevelToText[selectedDifficulty]}</p>
    </div>
  );
}

export default Example;