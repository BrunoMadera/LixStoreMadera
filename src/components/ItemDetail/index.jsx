import { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";


import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";




const ItemDetail = ({ item }) => {
    const cart = useContext(CartContext);
    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);
    const initial = 1;
    const [count, setCount] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

    useEffect(() => {
        console.log(cart.cart)
    },[cart])

    function removeItem() {
        if (count >= initial) {
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < currentStock) {
            return setCount(count + 1)
        } 
    }

    function onAdd() {
        // const carrinho = document.getElementById("cart");
        // carrinho.innerHTML = parseInt(carrinho.innerText) + count;
        setCurrentStock(currentStock - count);
        setCount(0);
        cart.addToCart(item, count)
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
                            <div style={{color:'white'}}>
                                <p className="card-text h11"style={{color:'black'}}>{description}</p>
                                    <hr className="hrWhite"/>
                                <p className="card-text h12">Apenas R$ {price}</p>
                                    <hr className="hrBrown"/>
                                <span className="card-text h12">Temos {currentStock} unidades disponíveis para você!</span>
                                    <hr className="hrGray"/>
                                <div className="position">
                                    <Stack direction="row" spacing={15}> 
                                        <Button variant="text" style={{margin:'18px 0 0 0 '}}>        
                                            <ItemCount style={{width:'15px'}} stock={currentStock} count={count} removeItem={removeItem} addItem={addItem} onAdd={onAdd}  />
                                        </Button>
                                    <Button style={{backgroundColor:'gold', color:'black', borderRadius: '60px'}}variant="contained" id="addToCart" onClick={onAdd} disabled={count === 0 ? true : false}> 
                                        Reservar<AddShoppingCartSharpIcon style={{height:'60px'}} />
                                    </Button>
                                        <Typography >
                                            <Link to="/cart" className=" h12 link">
                                            Visualizar o Carrinho
                                            </Link>
                                         </Typography>
                                    </Stack>
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