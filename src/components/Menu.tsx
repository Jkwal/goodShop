import {MocksCategories} from "data/Mocks";

export function Menu() {
    return (
        <ul className='menu'>
            {
                MocksCategories.map(item =>
                    <li key={item.id}>
                        {item.label}
                    </li>)
            }
        </ul>
    );
}