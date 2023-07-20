import React, { useState } from "react";

const Calculate = (props) => {
  const [percent, setPercent] = useState("");
  const [price, setprice] = useState("");

  const calculate = () => {
    setPercent((props.amount * props.percentage) / 100);
    setprice(Number(props.amount) + (props.amount * props.percentage) / 100);
  };

  return (
    <div className="mainTwo">
      <div className="div">
        <span>Tip amount:</span>
        <div>{percent}</div>
      </div>
      <div className="div">
        <span>Total amount:</span>
        <div>{price}</div>
      </div>
      <div className="button">
        <button onClick={() => calculate()}>Calculate</button>
      </div>{" "}
    </div>
  );
};

export default Calculate;
