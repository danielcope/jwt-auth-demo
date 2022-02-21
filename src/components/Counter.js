import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { storeData } from "../redux/randomDataSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.getData.value);
  const dispatch = useDispatch();

  const getInfo = async () => {
    await axios
      .get("/get-stuff")
      .then((res) => {
        dispatch(storeData(res.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => getInfo()}>get</button>
      </div>
    </div>
  );
};

export default Counter;
