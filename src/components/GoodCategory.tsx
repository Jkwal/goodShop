import {MocksCategories, MockGood} from 'data/Mocks'
import {Card} from 'components/Card'

export function GoodCategory() {
    return (
        <div className='goodCategory'>
            <div className="title">
                <p>{MocksCategories[4].label}</p>
                <p style={{'fontStyle': 'italic'}}> Популярные товары </p>
            </div>

            <ul className='bestgoods'>
                {
                    MockGood.map(item =>
                        <Card key={item.id}{...item}/>)
                }
            </ul>
        </div>
    );
}