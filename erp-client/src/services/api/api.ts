import axios from "axios"; 

export const api_url = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  "Content-Type": "application/json" 
}
 
export const api = axios.create({
  baseURL: api_url,
  headers: headers,
});


