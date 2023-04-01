import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Button, Card} from "antd";
import {useAppDispatch} from "../hooks";
import {getListProductsCategory, loadProductsByCategory} from "../store";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Image} from 'antd';
import {Space} from "antd/lib";
import {Cards} from "../components/Card";
import styles from 'styles/CategoryPage.module.css';

export function CategoryPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const products = useSelector(getListProductsCategory)

    useEffect(() => {
        id && dispatch(loadProductsByCategory(id));
    }, [dispatch, id])


    return (
        <>
            <section className={styles.categoryPage}>
                <Button type="primary" onClick={() => navigate(-1)}>Back</Button>
                <h1>CategoryPage {id}</h1>
                <Space size={[8, 16]} wrap>


                    {
                        products.map(({id, title, description, price, images}) => (
                            <div key={id}>
                                <NavLink to={`/products/${id}`}>

                                    <Cards>
                                        {title}
                                        {description}
                                        {price}
                                        <Image
                                            width={200}
                                            src={`${images![0]}`}
                                        />
                                    </Cards>

                                </NavLink>
                            </div>
                        ))
                    }

                </Space>

            </section>
        </>
    );
}