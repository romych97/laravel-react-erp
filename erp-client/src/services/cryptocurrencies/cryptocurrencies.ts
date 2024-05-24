import { api } from "../api/api";

export const getCryptocurrencies = async (): Promise<any> => {
    return await api.get('/cryptocurrencies', {}).then((response:any) => {
        return response.data;
    })
}