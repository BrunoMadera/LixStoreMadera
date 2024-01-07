import { useState } from 'react';


function ItemCount() {

    const [addCount, setContClique] = useState(0);

    function addCart() {
        
        setContClique(addCount + 1);
       
        return (addCount)
    }

    function removeCart() {

        if (addCount !== 0) {
            setContClique(addCount - 1);
        }
        
        return (addCount)
    }

    return (

        <div className="boxCounter">

            <div className="input-group mb-3"> 
                <button className="btn btn-secondary" type="button" id="button-addon1" onClick={removeCart}>-</button>
                <input type="number" className="form-control txtCounter" placeholder="" input value={addCount} min="0" />
                <button className="btn btn-secondary" type="button" id="button-addon2" onClick={addCart} style={{margin:'0'}}>+</button>
            </div>
        </div>
    
     )


}

export default ItemCount;


// import React from "react";
// import './style.css';

// const ItemCount = (props) => {

//     const count = props.count;
//     const stock = props.stock;

//     return (
//         <>
//             <div className="form-group py-2">
//                 <button className="btn btn-outline-primary btn-icon" id="remove" onClick={props.removeItem} disabled={count === 0 ? true : false}><i className="bi bi-dash icon"></i></button>
//                 <span className="mx-2" style={{ maxWidth: "50px" }}>{stock === 0 ? <span className="badge bg-danger p-2">ESGOTADO</span> : count}</span>
//                 <button className="btn btn-outline-primary btn-icon" id="add" onClick={props.addItem} disabled={stock === 0 ? true : false}><i className="bi bi-plus icon"></i></button>
//             </div>
//         </>
//     )
// }

// export default ItemCount;