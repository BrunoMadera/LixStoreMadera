
import { useState } from 'react';
import Button from '@mui/material/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { CartContext } from "../../contexts/CartContext";
import { useContext } from 'react';

import { MdRemoveShoppingCart } from "react-icons/md";
// import { CgRemoveR } from "react-icons/cg";
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';




function Cart() {
  
  const cartContext = useContext(CartContext)

  const carr = cartContext.cartAdded;

  const cartItems =()=>{
              return (
                
                  <div style={{backgroundColor:'white'}}>
                    {carr.map((carr, index) => { 
                      return (
                        <div key={index} style={{backgroundColor:'white'}} className="h13" >
                          {/* <CgRemoveR className="removeItem" onClick={removeItem}/> */}
                          <p style={{fontWeight:'bold'}}>{carr.name} 
                            <span style={{fontWeight:'normal'}} > x {(carr.count)}</span>
                            <span style={{fontWeight:'normal'}} > = R$ {parseFloat(carr.price * carr.count).toFixed(2)}</span>
                          </p>

                          <hr className="hrBrown" />
                        </div>
                      );
                    })}

                  </div>
                );

              }

function sumPrice (){

        let sumPrice=0;
        
        for(var i = 0; i <cartContext.cartAdded.length; i++) { 
              
              sumPrice= cartContext.cartAdded[i].price * cartContext.cartAdded[i].count+ sumPrice; 
        } 
        return parseFloat(sumPrice).toFixed(2);
      }

// function removeItem(index){

//   carr.splice({index},1);
//   console.log(carr);
//   return carr;
// }
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        <CartWidget/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'white'}}>
        <p className="h11 titleCartItems" style={{textAlign:'end', background:"rgba(16, 52, 166, 0.5)"}} >
        <MdRemoveShoppingCart onClick={cartContext.clearCart && handleClose} className="cartItemsRemove" />
            Items no carrinho...</p>
            <hr className="hrPink" style={{marginTop:'75px'}}/>
              {cartItems()}      
            <hr className="hrPink"/>
            <p className="h11 sumTitle"> 
                {cartContext.cartAdded.length === 0 ? 
                    <span>Carrinho Vazio.. <br/> Continue comprando :D </span> 
                  : <span className="totalCart"> Total do Carrinho R$ {sumPrice()} </span>
                }
              <hr className="hrBrown" />  
            </p>

            <p> {cartContext.cartAdded.length === 0 ? 
                <Button variant="disabled" > </Button>  
                : <Link to="/CheckOut"><Button variant="outlined" color="success" className="checkOutButton"endIcon={<ShoppingCartCheckoutIcon />} onClick={handleClose} > Ir para CheckOut </Button> </Link>
                }
            </p>
            
           </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
