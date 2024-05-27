import { api } from "../api/api";

export const getCategories = async (): Promise<any> => {
    return await []
}

export const createCategoryService = async (category:any): Promise<any> => {
    try {
        return api.post('/categories', category);
    } catch (error) {
        return error
    }
}

export const getCategoriesService = async (): Promise<any> => {
    try {
        return api.get('/categories');
    } catch (error) {
        return error
    }
}