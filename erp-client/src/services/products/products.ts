import { api } from "../api/api";

export const getProducts = async (): Promise<any> => {
    return await []
}

export const createProductService = async (category:any): Promise<any> => {
    try {
        return api.post('/products', category);
    } catch (error) {
        return error
    }
}

export const getProductsService = async (): Promise<any> => {
    try {
        return api.get('/products');
    } catch (error) {
        return error
    }
}