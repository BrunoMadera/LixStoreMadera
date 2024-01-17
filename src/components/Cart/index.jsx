
import { useState } from 'react';
import Button from '@mui/material/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { CartContext } from "../../contexts/CartContext";
import { useContext } from 'react';

import { MdRemoveShoppingCart } from "react-icons/md";







function Cart() {
  
  const cartContext = useContext(CartContext)

  const carr = cartContext.cartAdded;


  const cartItems =()=>{
              return (
                
                  <div style={{backgroundColor:'white'}}>
                    {carr.map((carr, index) => { 
                      return (
                        <div key={index} style={{backgroundColor:'white'}} className="h13" >
                          <p style={{fontWeight:'bold'}}>{carr.name} <span style={{fontWeight:'normal'}} > | R$ {carr.price}</span></p>
                          <hr className="hrBrown" />
                          <p>Quantidade: {1}</p>
                          <hr className="hrGray" />
                        </div>

                      );
                    })}

                  </div>
                );

              }

function sumPrice (){

        let sumPrice=0;
        
        for(var i = 0; i <cartContext.cartAdded.length; i++) { 
              
              sumPrice= cartContext.cartAdded[i].price + sumPrice; 
        } 

        return parseInt(sumPrice);
        
      }

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="contained" color="success" onClick={handleShow} disabled={cartContext.cartAdded.length === 0 ? true : false}>
        Ver Carrinho
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'white'}}>
        <p className="h11 titleCartItems" style={{textAlign:'end', background:"rgba(16, 52, 166, 0.5)"}} >
        <MdRemoveShoppingCart onClick={cartContext.clearCart} className="cartItemsRemove" />
            Items no carrinho...</p>
            <hr className="hrPink" style={{marginTop:'75px'}}/>
              {cartItems()}      
            <hr className="hrPink"/>
            <p className="h11"> Total do Carrinho R$ {sumPrice()} </p>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;















// import { Link } from "react-router-dom";


// const Cart = () => {

//     return (
//         <>

//         <Link to="/cart">
// <div className = "h12" id="cart" style={{marginTop:"120px", color: "white"}}>Carrinho</div>
//         </Link>

//         </>
//     )
// }

// export default Cart;