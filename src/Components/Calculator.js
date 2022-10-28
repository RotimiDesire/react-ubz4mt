import React, { useState } from 'react';

export default function Calculator() {
  const [btn, setBtn] = useState('');
  const [ans, setAns] = useState('');

  function AllClear() {
    setBtn('');
    setAns('');
  }

  function SingleClear() {
    try {
      setBtn(btn.slice(0, -1));
    } catch {
      setBtn(btn);
    }
  }

  function Evaluate() {
    try {
      setAns(eval(btn));
    } catch {
      setAns('!== Math');
    }
  }

  return (
    <div className="calc">
      <div className="display">
        <input type="text" className="display-arith" value={btn} />
        <input type="text" className="display-ans" value={ans} />
      </div>
      <div className="buttons">
        <button onClick={() => AllClear()}>C</button>
        <button onClick={() => SingleClear()}>»</button>
        <button value="/" onClick={(e) => setBtn(btn + e.target.value)}>
          /
        </button>
        <button value="*" onClick={(e) => setBtn(btn + e.target.value)}>
          X
        </button>
        <button value="7" onClick={(e) => setBtn(btn + e.target.value)}>
          7
        </button>
        <button value="8" onClick={(e) => setBtn(btn + e.target.value)}>
          8
        </button>
        <button value="9" onClick={(e) => setBtn(btn + e.target.value)}>
          9
        </button>
        <button value="-" onClick={(e) => setBtn(btn + e.target.value)}>
          -
        </button>
        <button value="4" onClick={(e) => setBtn(btn + e.target.value)}>
          4
        </button>
        <button value="5" onClick={(e) => setBtn(btn + e.target.value)}>
          5
        </button>
        <button value="6" onClick={(e) => setBtn(btn + e.target.value)}>
          6
        </button>
        <button value="+" onClick={(e) => setBtn(btn + e.target.value)}>
          +
        </button>
        <button value="1" onClick={(e) => setBtn(btn + e.target.value)}>
          1
        </button>
        <button value="2" onClick={(e) => setBtn(btn + e.target.value)}>
          2
        </button>
        <button value="3" onClick={(e) => setBtn(btn + e.target.value)}>
          3
        </button>
        <button onClick={() => Evaluate()}>=</button>
        <button value="0" onClick={(e) => setBtn(btn + e.target.value)}>
          0
        </button>
        <button value="." onClick={(e) => setBtn(btn + e.target.value)}>
          .
        </button>
      </div>
    </div>
  );
}
