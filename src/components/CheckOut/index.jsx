import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


import { CartContext } from "../../contexts/CartContext";
import { useContext } from 'react';

import { TbCubeSend } from "react-icons/tb";

import swal from 'sweetalert';


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(16, 52, 166, 0.2)',
    color: 'rgba(255, 255, 255, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function confirmOrder(){

  swal({
  title: "Feito!",
  text: "Seu pedido foi enviado! Entraremos em contato!",
  button: false,

});

}

function CheckOut() {

const cartContext = useContext(CartContext)
const carr = cartContext.cartAdded;

function sumPrice (){

        let sumPrice=0;
        
        for(var i = 0; i <cartContext.cartAdded.length; i++) { 
              
              sumPrice= cartContext.cartAdded[i].price * cartContext.cartAdded[i].count+ sumPrice; 
        } 
        return parseFloat(sumPrice).toFixed(2);
      }

return(
<>

<div className="checkOutBox h13">Aqui estão os Produtos do Seu Carrinho
    <div className="checkOutContainer">
        {carr.map((carr, index) => { 
        return (

            <div key={index} style={{backgroundColor:'white'}} className="h13 checkOutItem" >
                <p style={{fontWeight:'bold'}}>{carr.name} 
                    <span style={{fontWeight:'normal'}} > x {(carr.count)}</span>
                    <span style={{fontWeight:'normal'}} > = R$ {parseFloat(carr.price * carr.count).toFixed(2)}</span>
                </p>
                <hr className="hrBrown" />
            </div>
        );
        })}
    </div>
    <hr className="hrPink" />

    <div className="containerCheckSum">
    <span className="totalCartCheckOut"> Total do Carrinho R$ {sumPrice()} </span>
        <hr className="hrPink" /> 

      <HtmlTooltip
        title={
          <React.Fragment >
            <Typography  color="pink">Enviando seu pedido!</Typography>
            <em >{"Ao clicar você comprará as melhores peças"}.{' '}
            <b>{"...na melhor loja!!"} </b></em>
          </React.Fragment>
        }
      >
                <button onClick={confirmOrder}><TbCubeSend /><TbCubeSend /><TbCubeSend /></button>
      </HtmlTooltip>


    </div>

</div>



</>




)

    
}
export default CheckOut;

