import {Cards} from 'components/Card'

export function GoodCategory() {
    return (
        <div className='goodCategory'>
            <div className="title">
                <p style={{'fontStyle': 'italic'}}> Популярные товары </p>
            </div>

            <ul className='bestgoods'>
            </ul>
        </div>
    );
}