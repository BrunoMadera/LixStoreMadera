import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import LoupeSharpIcon from '@mui/icons-material/LoupeSharp';


const Item = ({ item }) => {

    const name = item.name;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);

    return (
        <>

        <div className="card" style={{width: '350px', margin:'50px 0 0 0', padding: '15px', color: 'white'}}>
        <img src={imgUrl} className="card-img-top" alt="produtos" />
        <hr />
              <Link to={`/item/${item.id}`} >
                <LoupeSharpIcon  style={{ position:'relative', left:'40%', width: '100%', color:'rgba(0, 0, 0, 0.5)', height:'35px', }} /> 
              </Link>
        <h5 class="card-title h5" style={{textAlign: 'right', color: 'black'}}>{name}</h5>
        <div className="card-body">
        <p className="card-text h9">Preço: R$ {price}</p>
        <hr />
        <blockquote style={{fontStyle:'italic',  margin:'0', textAlign: 'right', color: 'white'}}className="blockquote-footer" >em estoque:  {stock} </blockquote >
        <hr />

        <ItemCount />


        </div>
        </div>
            
        </>
    )
}

export default Item;
