import * as React  from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { CartContext } from "../../contexts/CartContext";
import { useContext } from 'react';
import { fontSize } from '@mui/system';

    

    
function CartWidget() {

const cartContext = useContext(CartContext)

        return (

        
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton  aria-label="show cart" color="inherit">
            <Badge badgeContent={cartContext.cartAdded.length} color="error"> 
            <ShoppingCartIcon />  
            </Badge>
        </IconButton>
        </Box> 


   );
}
 
export default CartWidget;          
          
          
          
          