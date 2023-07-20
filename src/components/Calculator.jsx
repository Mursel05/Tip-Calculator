import React, { useState } from "react";
import Calculate from "./Calculate";

const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");

  return (
    <div>
      <div className="header">
        <h1>Tip</h1> <h1 className="head">Calculator</h1>
      </div>
      <div className="mainOne">
        <div className="input">
          <span>Bill amount:</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <span>Tip percentage:</span>
          <input
            type="number"
            value={percentage}
            onChange={(e) => {
              setPercentage(e.target.value);
            }}
          />
        </div>
        <Calculate amount={amount} percentage={percentage} />
      </div>
    </div>
  );
};

export default Calculator;
