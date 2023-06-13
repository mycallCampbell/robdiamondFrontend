import { useState } from "react";

export default function Slider() {
  const [slider, setSlider] = useState(["Slider1", "Slider2", "Slider3"]);
  let count = 0;
  const changeSlide = () => {
    if (count < slider.length) {
      setSlider(slider[count + 1]);
    } else {
      setSlider(slider[0]);
    }
  };
  return <div>{setTimeout(changeSlide, 3000)}</div>;
}
