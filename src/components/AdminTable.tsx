import {Image, Table} from 'antd';
import {useSelector} from "react-redux";
import {getAllProducts} from "../store";
import React from "react";
import {NavLink} from "react-router-dom";



const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a: any, b: any) => a.price - b.price,
        render: (text: string) => <NavLink to={`/products/${text}`}>{text}</NavLink>,

    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',

        sorter: (a: any, b: any) => {
            let nameA = a.title.toLowerCase(),
                nameB = b.title.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        },
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a: any, b: any) => a.price - b.price,
    },
    {
        title: 'Images',
        dataIndex: 'images',
        key: 'images',
        render: (image:string)=> <Image src={image[0]} width={120} alt='good' />
    }
]



export const AdminTable = () => {

    const productsAll = useSelector(getAllProducts);
    const dataSource = productsAll.map(item=>({...item,key:item.id}))
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            bordered
        />
    )
}