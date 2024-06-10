import { api } from "../api/api";

export const uploadMainImageService = async (formData:any): Promise<any> => {
    try {
        return api.post('/products/8/main-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        );
    } catch (error) {
        return error
    }
}

export const uploadAdditionalImageService = async (formData:any): Promise<any> => {
    try {
        return api.post('/products/8/additional-images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }}
        );
    } catch (error) {
        return error
    }
}