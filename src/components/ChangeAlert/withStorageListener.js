import React from "react";


function withStorageListener(Component){

    return function ComponenteDeVerdad (props){

        const[storageChange,setStorageChange] = React.useState(false);

        window.addEventListener('storage',(change)=>{
            if(change.key === 'TODOS_V1'){
                console.log("Hubo cambios en TODOS_V1")
                setStorageChange(true);
            }
        });

        const toggleShowFunction= () =>{
            props.sincronizeApp();
            setStorageChange(false)
        }

        return(
            <Component 
                show={storageChange} 
                toggleShow={toggleShowFunction}
            />
        )
    }
}

export { withStorageListener }