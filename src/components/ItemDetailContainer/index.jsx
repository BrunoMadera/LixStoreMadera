import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { Produtos } from "../../produtos";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState('');

    useEffect(() => {

        const delay = setTimeout(() => {
            setDetail(Produtos.filter((item) => {
                return item.id === id
            }))
        }, 500)

        return () => {
            clearTimeout(delay)
        }

    }, [id])

    return (
        <>
            <div className="container">
                {detail.length === 0 ? <Spinner /> : <ItemDetail item={detail[0]} />}
            </div>
        </>
    )
}

export default ItemDetailContainer;

