import React from "react";
import {withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"
import ReactDOM from "react-dom";

function ChangeAlert({show,toggleShow}){

    if (show){
       return ReactDOM.createPortal( 
            <div className="modalChangeAlert">

                <p>HUBO CAMBIOS</p>
                <button onClick={()=> toggleShow(false)} >
                    Volver a cargar la info..
                </button>

            </div>,
        document.getElementById('modalChangeAlert')
        
        )
    }else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }