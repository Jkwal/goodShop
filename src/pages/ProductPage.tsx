import {useParams} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {useSelector} from "react-redux";
import {getSingleProduct, loadSingleProduct} from "../store";
import {useEffect} from "react";
import {Image} from 'antd';

export function ProductPage() {

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const product = useSelector(getSingleProduct);
    const {title, images, price, description} = product

    useEffect(() => {
        id && dispatch(loadSingleProduct(id));
    }, [dispatch, id])


    return (
        <>
            <h1>{title}</h1>
            {images?.length ? <img src={`${images![0]}`} alt={title}/> : null}
            <p>{description}</p>
            <p>{price}</p>
        </>


    )
}