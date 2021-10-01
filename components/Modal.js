import React, {useState} from 'react';

export function Modal({ modalClose, modalFormSubmit}) {
    const [shape, setShape] = useState({
        shapeName: '',
        shapeXCoOrdinate: '',
        shapeYCoOrdinate: '',
        shapeHeight: '',
        shapeWidth: '',
    })

    // const [modalStatus, setModalStatus] = useState(modalOpenStatus);

    const onChange = (e) => {
        setShape({ ...shape, [e.target.name]: e.target.value})
    }

    const onModalClose = (evt) => {
        evt.stopPropagation();
        modalClose();
    }


    const onFormSubmit = event => {
        event.preventDefault();
        modalFormSubmit(shape);

        setShape({
            shapeName: '',
            shapeXCoOrdinate: '',
            shapeYCoOrdinate: '',
            shapeHeight: '',
            shapeWidth: '',
        })
    }

    return (
        <React.Fragment>
            <div className="modal">
            <div className="modal--lg">
                    <button type="button"
                            id="closeModalBtn"
                            className="btn-close"
                            onClick={onModalClose}>
                        <span className="icon-xs icon-close"></span>
                    </button>
                <div className="modal__head">
                    <h2>Create shape</h2>
                </div>
                <div className="modal__body">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-shape">
                            <div className="form-group">
                                <label>Name of Shape</label>
                                <input 
                                    required
                                    type="text" 
                                    name="shapeName" 
                                    placeholder="Enter shape name"
                                    value={shape.shapeName}
                                    onChange={onChange}
                                    />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-1-2">
                                    <label>Height</label>
                                    <input 
                                        required
                                        min="10"
                                        type="number" 
                                        name="shapeHeight" 
                                        placeholder="Enter height"
                                        value={shape.shapeHeight}
                                        onChange={onChange}
                                        />
                                </div>
                                <div className="form-group col-1-2">
                                    <label>Width</label>
                                    <input 
                                        required
                                        type="number" 
                                        name="shapeWidth" 
                                        placeholder="Enter width"
                                        value={shape.shapeWidth}
                                        onChange={onChange}
                                        />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-1-2">
                                    <label>X position</label>
                                    <input 
                                        required
                                        type="number" 
                                        name="shapeXCoOrdinate" 
                                        placeholder="Enter X value"
                                        value={shape.shapeXCoOrdinate}
                                        onChange={onChange}
                                        />
                                </div>
                                <div className="form-group col-1-2">
                                    <label>Y position</label>
                                    <input 
                                        required
                                        type="number" 
                                        name="shapeYCoOrdinate" 
                                        placeholder="Enter Y value"
                                        value={shape.shapeYCoOrdinate}
                                        onChange={onChange}
                                        />
                                </div>
                            </div>
                            <div className="form-cta">
                                <button type="submit"
                                        className="btn btn-secondary btn-block">
                                            Create New Shape
                                </button>
                            </div>
                        </div>                   
                    </form>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
