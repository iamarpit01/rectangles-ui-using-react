import * as React from "React";
import PropTypes from 'prop-types';

export function Shape({ name, x, y, width, height, mouseMove, mouseOut }) {
  const onElemenMouseMove = event => {
    event.persist();
    let currentEvent = event;
    let curerntTargetShapeTitle = event.target.getAttribute("data-name");
    let coOrdinateX =  currentEvent.nativeEvent.offsetX;
    let coOrdinateY = currentEvent.target.clientHeight - currentEvent.nativeEvent.offsetY;

    mouseMove(curerntTargetShapeTitle, coOrdinateX, coOrdinateY);
  }

  const onElementMouseOut = event => {
    mouseOut();
  }

  return (
    <div
      className="shape"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: `${width}px`,
        height: `${height}px`
      }}
      onMouseMove={onElemenMouseMove}
      onMouseOut={onElementMouseOut}
      data-name={name}
    ></div>
  );
}

Shape.propTypes = {
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
}