export const ROUTES = {
    HOME: "/",
    BASKET: "/cart",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PRODUCT: "/products/:id",
    CATEGORY: "/categories/:id",
    GOODS:"/goods",
};


export const BASE_URL = "https://api.escuelajs.co/api/v1";


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

export const randomNumber = getRandomInt(1, 5)

export const sum = (arr:number[]) => arr.reduce((prev, cur) => prev + cur, 0);