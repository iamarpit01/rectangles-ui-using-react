import React, { useState } from "react";
import { Shape } from "./components/Shape";
import { Modal } from "./components/Modal";
import './App.scss';

export function App() {
  const [log, setLog] = useState({
    name: '--',
    x: 0,
    y: 0
  });

  const [shapeList, setShapeList] = useState([
    {
      name: 'Alpha',
      x: 50,
      y: 50,
      width: 200,
      height: 200
    }
  ])

  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  React.useEffect(() => {
    window.addEventListener('click', evt => {
      console.log("click hapens")
      // if(!(evt.target.id == "addShapeBtn" || evt.target.id == "closeModalBtn")){
        onModalOpen();
      // }
    })
  }, []);

  const onModalFormSubmit = (newShape) => {
    setShapeList([...shapeList, 
                    { name      : newShape.shapeName, 
                      x         : parseInt(newShape.shapeXCoOrdinate), 
                      y         : parseInt(newShape.shapeYCoOrdinate),
                      width     : parseInt(newShape.shapeWidth),
                      height    : parseInt(newShape.shapeHeight)
                    }
                  ]);
  }

  const onMouseMove = (name, x, y) => {
    setLog({name, x, y})
  }

  const onMouseOut = (name, x, y) => {
    setLog({name: '--', x: 0, y: 0})
  }

  const onModalClose = () => {
    setModalOpenStatus(false)
  }

  const onModalOpen = () => {
    setModalOpenStatus(true)
  }

  return (
    <div>
      

      { shapeList.map(shape => <Shape
                                      key={shape.name}
                                      mouseMove={onMouseMove}
                                      mouseOut={onMouseOut}
                                      name={shape.name}
                                      x={shape.x}
                                      y={shape.y}
                                      width={shape.width}
                                      height={shape.height} /> )
      }

      <div
        className="shape-details">
        <h5>Details</h5>
        
        <ul>
          <li>{log.name ? log.name : '--'}</li>
          <li>Mouse X - {log.x}</li>
          <li>Mouse Y - {log.y}</li>
        </ul>

        <div className="shape-details__cta">
          <button type="button"
                  id="addShapeBtn"
                  className="btn btn-primary"
                  onClick={onModalOpen}>+ Add a Shape</button>
        </div>
      </div>


    { modalOpenStatus && <Modal
                            modalFormSubmit={onModalFormSubmit} 
                            modalClose={onModalClose}
                        /> 
}
      
    </div>
  );
}
