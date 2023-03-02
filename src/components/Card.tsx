import {Good} from "data/Mocks";

export function Card(props:Good) {
    const {
        img,
        label,
        price,
        description,
    } = props;
    return (
        <div className='card'>
            <div className='img'>{img}</div>
            <h2>{label}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}