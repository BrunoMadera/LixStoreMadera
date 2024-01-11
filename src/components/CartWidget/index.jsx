import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContextProvider } from '../../contexts/cartContext';


     
function CartWidget() {
        return (
<CartContextProvider>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" aria-label="show cart" color="inherit">
            <Badge badgeContent={44} color="error">
            <ShoppingCartIcon />  
            </Badge>
        </IconButton>
        </Box> 
 </CartContextProvider>
   );
}
 
export default CartWidget;          
          
          
          
          