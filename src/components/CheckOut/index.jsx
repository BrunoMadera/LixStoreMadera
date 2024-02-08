import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

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

function CheckOutItem({ item, onRemove }) {
  function handleRemove() {
    onRemove(item.id);
  }

  return (
    <div style={{ backgroundColor: 'white' }} className="h13 checkOutItem">
      <p style={{ fontWeight: 'bold' }}>
        {item.name}
        <span style={{ fontWeight: 'normal' }}> x {item.count}</span>
        <span style={{ fontWeight: 'normal' }}> = R$ {parseFloat(item.price * item.count).toFixed(2)}</span>
        <button onClick={handleRemove}>Remover</button> 
      </p>
      <hr className="hrBrown" />
    </div>
  );
}

function CheckOut() {
  const cartContext = useContext(CartContext);

  function sumPrice() {
    let sumPrice = 0;
    for (let i = 0; i < cartContext.cartAdded.length; i++) {
      sumPrice = cartContext.cartAdded[i].price * cartContext.cartAdded[i].count + sumPrice;
    }
    return parseFloat(sumPrice).toFixed(2);
  }

  async function confirmOrder() {
    if (cartContext.cartAdded.length === 0) {
      swal({
        title: "Erro!",
        text: "Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    const firestore = getFirestore();
    const pedidosCollection = collection(firestore, 'pedidos');

    try {
      const itemsToSave = cartContext.cartAdded.map((item) => ({
        productId: item.id,
        productName: item.name,
        productPrice: item.price,
        productCount: item.count
      }));

      const totalPrice = sumPrice();

      const orderDocRef = await addDoc(pedidosCollection, {
        items: itemsToSave,
        totalPrice,
        timestamp: serverTimestamp()
      });

      swal({
        title: "Feito!",
        text: `Seu pedido foi enviado! Entraremos em contato! ID do Pedido: ${orderDocRef.id}`,
        button: "OK",
      });

      cartContext.clearCart();
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
      swal({
        title: "Erro!",
        text: "Ocorreu um erro ao enviar seu pedido. Por favor, tente novamente.",
        icon: "error",
        button: "OK",
      });
    }
  }

  function clearCart() {
    cartContext.clearCart();
  }

  function removeItem(itemId) {
    cartContext.removeItem(itemId);
  }

  return (
    <>
      <div className="checkOutBox h13">
        Aqui estão os Produtos do Seu Carrinho
        <div className="checkOutContainer">
          {cartContext.cartAdded.map((item, index) => (
            <CheckOutItem key={index} item={item} onRemove={removeItem} />
          ))}
        </div>
        <hr className="hrPink" />

        <div className="containerCheckSum">
          <span className="totalCartCheckOut"> Total do Carrinho R$ {sumPrice()} </span>
          <hr className="hrPink" />

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="pink">Enviando seu pedido!</Typography>
                <em>{"Ao clicar você comprará as melhores peças."}{' '}</em>
                <b>{"...na melhor loja!!"}</b>
              </React.Fragment>
            }
          >
            <button onClick={confirmOrder}><TbCubeSend /><TbCubeSend /><TbCubeSend /></button>
          </HtmlTooltip>
          <button onClick={clearCart}>Limpar Carrinho</button> 
        </div>
      </div>
    </>
  );
}

export default CheckOut;