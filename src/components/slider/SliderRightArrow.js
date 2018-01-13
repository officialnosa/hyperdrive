import React from "react"

const SliderRightArrow = ({ nextSlide }) => {
  return (
    <div className="slider-right-arrow" onClick={nextSlide}>
      <img src={require("../../images/slider-right-arrow.svg")} />
    </div>
  )
}

export default SliderRightArrow
