import React from "react";
import "./App.css";

import { incrementNum, decrementNum } from "./action/index";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decrementNum(5))}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myState}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incrementNum(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
