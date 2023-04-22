import {useSelector} from "react-redux";

import {getCart, getIsAuth} from "store";

import {Badge} from "antd";
import {ShoppingTwoTone} from '@ant-design/icons';


export function Basket() {

    const cart = useSelector(getCart)
    const isAuth = useSelector(getIsAuth)

    return (
        <ul>
            <Badge count={isAuth ? cart.length : 0}>
                <ShoppingTwoTone twoToneColor="#AAA" style={{'fontSize': '3rem'}}/>
            </Badge>
        </ul>
    );
}