import {useSelector} from "react-redux";
import {getListProductsCategory} from "../store";

export const GoodCategory = () => {

    const productsByCategory = useSelector(getListProductsCategory)

    return (
        <section className='goodCategory'>

            <div className="category">
                <p>Бестселлеры:</p>
            </div>

        </section>
    )
}