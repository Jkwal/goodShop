import {Badge} from "antd";
import {ShoppingTwoTone} from '@ant-design/icons';
import {useSelector} from "react-redux";
import {getCart, getIsAuth} from "../store";

export function Cart() {

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