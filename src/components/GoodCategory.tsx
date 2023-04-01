import {useSelector} from "react-redux";
import {getListProductsCategory, loadProductsByCategory} from "../store";
import React, {useEffect} from "react";
import {useAppDispatch} from "../hooks";
import {NavLink} from "react-router-dom";
import {Cards} from "./Card";
import {Image} from "antd";
import {Space} from "antd/lib";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

const randomNumber = getRandomInt(2, 5)
console.log(randomNumber)


export const GoodCategory = () => {

    const dispatch = useAppDispatch();

    const productsByCategory = useSelector(getListProductsCategory);

    useEffect(() => {
        dispatch(loadProductsByCategory("" + randomNumber));
    }, [dispatch])

    return (
        <section className='goodCategory'>
            <h2>{productsByCategory[0]?.category?.name}</h2>
            <Space size={[8, 16]} wrap>
                {
                    productsByCategory.map(({id, price, title, images}) => (
                        <div key={id}>

                            <NavLink to={`/products/${id}`}>
                                <Cards>
                                    {
                                        images?.length
                                            ? <Image
                                                width={200}
                                                src={`${images![0]}`}
                                            />
                                            : null
                                    }
                                    <p>{title}</p>
                                    <p>{price}</p>
                                </Cards>
                            </NavLink>
                        </div>
                    ))
                }
            </Space>
        </section>
    )
}