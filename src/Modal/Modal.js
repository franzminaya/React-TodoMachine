import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

function Modal({children}){
return ReactDOM.createPortal(
    <div className="Modal">
        {children}
    </div>,
    document.getElementById('modalRoot')
)
}

export {Modal}