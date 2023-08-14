//APP.JS

import { useState } from "react";

// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + count);

function App() {
  // Transfering Data between components
  // lifting state to a common parent components and passing data down as props to the siblings.

  let [sliderValue, setSliderValue] = useState(1);
  let [inputValue, setInputValue] = useState(0);

  // Date

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + inputValue);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handlePusherDecrease = (event) => {
    return inputValue - sliderValue < 0
      ? setInputValue(0)
      : setInputValue(Number(inputValue) - Number(sliderValue));
  };

  const handlePusherIncrease = (event) => {
    setInputValue(Number(inputValue) + Number(sliderValue));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Slider
        onDataChange={handleSliderChange}
        slider_value={sliderValue}
      ></Slider>
      <Pusher
        value={inputValue}
        onDataClick={[handlePusherDecrease, handlePusherIncrease]}
      ></Pusher>

      <p>
        {inputValue === 0
          ? `Today is ${futureDate.toLocaleDateString()}`
          : `${inputValue} days from today is ${futureDate.toLocaleDateString()}`}
        ;
      </p>
    </div>
  );
}

function Pusher(props) {
  return (
    <div>
      <button onClick={props.onDataClick[0]}>-</button>
      <input value={props.value}></input>
      <button onClick={props.onDataClick[1]}>+</button>
    </div>
  );
}

function Slider(props) {
  // State

  // Handler

  return (
    <>
      <input
        onChange={props.onDataChange}
        type="range"
        min="0"
        max="9"
        value={props.slider_value}
        class="slider"
        id="mySlider"
      ></input>
      {props.slider_value}
    </>
  );
}

export default App;
