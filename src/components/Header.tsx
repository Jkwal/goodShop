import {Link} from "react-router-dom";
import {Basket} from "./Basket";
export function Header() {
    return (
        <nav className='header'>
            <Link to="/" className="logo">Animal Food Store</Link>
            <Basket/>
        </nav>
    );
}