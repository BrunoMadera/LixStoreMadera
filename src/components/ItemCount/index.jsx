import React from "react";


const ItemCount = (props) => {

    const count = props.count;
    const stock = props.stock;

    return (

        <div>
        
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-danger"id="remove" onClick={props.removeItem} disabled={count === 0 ? true : false}>-</button>
                        
                        <button className="btn btn-light" style={{ width: "100px" }}> 
                            {stock === 0 ? 
                                <span className="badge bg-danger p-2">Esgotado :(</span> 
                            : count}
                        </button>

                <button type="button" className="btn btn-success"id="add" onClick={props.addItem} disabled={stock === 0 ? true : false}>+</button>
                </div>

        
        </div>
    
     )


}
export default ItemCount;