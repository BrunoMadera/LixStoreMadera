import { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../../contexts/CartContext";


import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

import Cart from "../Cart";





const ItemDetail = ({ item }) => {
    const cartAdded = useContext(CartContext);
    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);
    const initial = 1;
    const [count, setCount] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

    useEffect(() => {
        console.log(cartAdded.cart)
    },[cartAdded])

    function removeItem() {
        if (count >= initial) {
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < currentStock) {
            return (
            setCount(count + 1)
        )} 
    }

    function onAdd() {
        setCurrentStock(currentStock - count);
        setCount(0);
        cartAdded.addToCart(item, count);
            }

    return (
        <>
        
            <div className="card mb-3" style={{maxWidth: '90%', margin: '80px 25px 25px 50px'}}>
                <div className="row g-0" style={{margin: '0'}}>
                    <div className="col-md-4">
                        <img src={imgUrl} className="img-fluid rounded-start" alt="produto em destaque" />
                    </div>
                    <div className="col-md-8" style={{color:'whitesmoke'}}>
                        <div className="card-body">
                            <h5 className="card-title h1" >{name}</h5>
                            <hr className="hrWhite"/>
                            <div style={{color:'white', textAlign:'center', fontStyle:'italic'}}>
                                <p className="card-text h11"style={{color:'black'}}>{description}</p>
                                    <hr className="hrWhite"/>
                                <p className="card-text h12">Apenas R$ {price}</p>
                                    <hr className="hrBrown"/>
                                <span className="card-text h12" style={{textAlign:'center'}}>Temos {currentStock} unidades disponíveis para você!</span>
                                    <hr className="hrGray"/>

                                <div className="ContA">
                                         <Button className="ItemA" variant="text">        
                                            <ItemCount style={{width:'15px'}} stock={currentStock} count={count} removeItem={removeItem} addItem={addItem} onAdd={onAdd} />
                                        </Button>
                                    <div className="ItemA addToCartIcon ">
                                        <Button variant="contained" color="warning" id="addToCart"  disabled={stock === 0 ? true : false} onClick={onAdd}> 
                                            Adicionar ao Carrinho <AddShoppingCartSharpIcon  />
                                        </Button>
                                    </div>
                                        <Typography >
                                            <Cart className="ItemA" />
                                         </Typography>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default ItemDetail;




            // <div className="card text-center">
            //     <div className="card-body d-flex align-content-between flex-wrap justify-content-center">
            //         <div className="row">
            //             <div className="col-4">
            //                 <img src={imgUrl} className="card-img-top" alt="produto" />
            //             </div>
            //             <div className="col-8">
            //                 <h5 className="card-title">{name}</h5>
            //                 <p className="card-text">{description}.</p>
            //                 <span className="badge bg-primary">R$ {price}</span>
            //                 <span className="badge bg-dark">Estoque: {currentStock}</span>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="card-footer d-flex justify-content-around">
            //         <div className="d-flex my-3 flex-column">
            //             <ItemCount stock={currentStock} count={count} removeItem={removeItem} addItem={addItem} onAdd={onAdd} />
            //             <div>
            //                 <button className="btn btn-outline-success btn-icon" id="addToCart" onClick={onAdd} disabled={count === 0 ? true : false}>Comprar</button>
            //             </div>
            //             <div className="mt-2">
            //                 <Link to="/cart" className="btn btn-outline-warning btn-icon">Finalizar Compra</Link>
            //             </div>
            //         </div>
            //     </div>
            // </div>