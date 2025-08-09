import axios from "axios";
const baseURL = "https://linked-posts.routemisr.com"


export async function registerApi(formData) {
    try{
        const {data} = await axios.post(baseURL + "users/signup" , formData)
        return data 
    } catch (error){
        return error.response.data.error
    }
}
export async function loginApi(formData) {
    try{
        const {data} = await axios.post(baseURL + "users/signin" , formData)
        return data
    } catch (error) {
        return error.response.data
    }
    
}