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

export const updateProductService = async (product:any): Promise<any> => {
    try {
        return api.put(`/products/${product.id}`, product);
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

export const destroyProductService = async (id:any): Promise<any> => {
    try {
        return api.delete(`/products/${id}`);
    } catch (error) {
        return error
    }
}