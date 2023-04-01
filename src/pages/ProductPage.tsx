import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {useSelector} from "react-redux";
import {getSingleProduct,loadSingleProduct} from "../store";
import {useEffect} from "react";
import { Image } from 'antd';
export function ProductPage() {

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const product = useSelector(getSingleProduct)
    const {title,description,images,price} = product;

    useEffect(() => {
        id && dispatch(loadSingleProduct(id));
    }, [dispatch, id])


    return (
        <>

            <h1>{title}</h1>
            <Image
                width={200}
                src={`${images![0]}`}
            />
            <p>{description}</p>
            <p>{price}</p>
        </>


    )
}