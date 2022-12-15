export type NewProduct = {
    name: string,
    avatar: string,
    description: string,
    price: number,
    category: string,
    developerEmail: string
}
export interface Product extends NewProduct {
    _id: string
}



