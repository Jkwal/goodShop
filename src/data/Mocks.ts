export interface Category {
    id: string;
    type: string;
    label: string;
}

export interface Good {
    categoryTypeId: string;
    description: string;
    id: string;
    img: string;
    label: string;
    price: string;
}

export const MocksCategories: Category[] = [
    {
        id: '1',
        type: 'Dog_Food',
        label: 'Корма для собак'
    },
    {
        id: '2',
        type: 'Cat_Food',
        label: 'Корма для кошек'
    },
    {
        id: '3',
        type: 'Beef',
        label: 'Говядина'
    },
    {
        id: '4',
        type: 'Bird',
        label: 'Птица'
    },
    {
        id: '5',
        type: 'Dried_treats',
        label: 'Сушеные лакомства'
    },
]

export const MockGood: Good[] = [
    {
        categoryTypeId: '5',
        description: "Название",
        id: '1',
        img: "Картинка",
        label: "Описание",
        price: '40р'
    },
    {
        categoryTypeId: '5',
        description: "Название",
        id: '2',
        img: "Картинка",
        label: "Описание",
        price: '10р',
    },
    {
        categoryTypeId: '5',
        description: "Название",
        id: '3',
        img: "Картинка",
        label: "Описание",
        price: '15р',
    },
    {
        categoryTypeId: '5',
        description: "Название",
        id: '4',
        img: "Картинка",
        label: "Описание",
        price: '25р',
    },
    {
        categoryTypeId: '5',
        description: "Название",
        id: '5',
        img: "Картинка",
        label: "Описание",
        price: '20р',
    },
    {
        categoryTypeId: '5',
        description: "Название",
        id: '6',
        img: "Картинка",
        label: "Описание",
        price: '35р',
    },
]
