import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
import { setColor } from './redux/colorSlice';

const container = document.getElementById("app");
const root = createRoot(container);

const Color = (props) => {
  const dispatch = useDispatch();
  const className = props.color === props.selectedColor ? props.color + " (already selected)" : props.color
  return (
    <div
      className={className}
      onClick={() => dispatch(setColor(props.color))}
    ></div>
  );
};

const Picker = () => {
  // const [selectedColor, setSelectedColor] = useState("red");
  let selectedColor = useSelector((state) => state.color.chosenColor)
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">

        <Color color="red" />
        <Color color="blue" />
        <Color color="green" />
        {/* <Color color="red" propSetSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="blue" propSetSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" propSetSelectedColor={setSelectedColor} selectedColor={selectedColor} /> */}
      </div>
    </div>
  );
};

root.render(<Provider store={store}>
  <Picker />
</Provider>);
