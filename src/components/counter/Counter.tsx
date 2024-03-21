import React, { useReducer } from "react";
import "./Counter.css";
import { CounterProps, CounterSate, Action } from "./Counter.types";

const Counter: React.FC<CounterProps> = (props) => {
  const reducer = (state: any, action: Action) => {
    let result;
    switch (action.type) {
      case "INCREASE":
        result = { ...state, ...action.value };
        break;
      case "DECREASE":
        result = { ...state, ...action.value };
        break;
      case "RESET":
        result = { ...state, ...action.value };
        break;
      default:
        result = { ...state, ...action.value };
        break;
    }
    return result;
  };

  const initialState: CounterSate = {
    count: props.count,
  };
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  const { onTrackCounter } = props;
  const handleDecreaseBtn = (_: any) => {
    dispatch({ value: { count: count - 1 }, type: "DECREASE" });
    onTrackCounter({ count: count - 1 });
  };
  const handleIncreaseBtn = (_: any) => {
    dispatch({ value: { count: count + 1 }, type: "INCREASE" });
    onTrackCounter({ count: count + 1 });
  };
  const handleResetBtn = (_: any) => {
    dispatch({ value: { count: props.count }, type: "RESET" });
    onTrackCounter({ count: props.count });
  };
  return (
    <div className="counterBtnSection">
      <div className="buttonsWrapper">
        <button className="btn" type="button" onClick={handleDecreaseBtn}>
          <span className="operators">-</span>
        </button>
        <p className="text">{count}</p>
        <button className="btn" type="button" onClick={handleIncreaseBtn}>
          <span className="operators">+</span>
        </button>
      </div>
      <p className="resetSection">
        <div className="reset" onClick={handleResetBtn}>
          {" "}
          Reset{" "}
        </div>
      </p>
    </div>
  );
};

export default Counter;
