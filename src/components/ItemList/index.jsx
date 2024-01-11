import { useEffect, useState } from "react";
import Item from "../Item";
import { Produtos } from "../../produtos";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";

const ItemList = () => {

    const { category } = useParams();
    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        const delay = setTimeout(() => {

            setProdutos(category ? Produtos.filter((item) => {
                return item.category === category
            }) : Produtos)
      
          }, 500)
      
          return () => {
      
            clearTimeout(delay)
      
          }
    }, [category])

    return (
        <>
            <div className="row">
                {produtos.length === 0 ? <Spinner /> : produtos.map((p, i) => {
                    return <div className="col-6 col-md-6 col-lg-4 col-xl-3 my-3 d-flex" key={`produto-${i}`}><Item item={p} key={`produto-${p.id}`}/></div>
                })}
            </div>
            
        </>
    )
}

export default ItemList;