import axios from 'axios'
const baseURL= "https://linked-posts.routemisr.com/"
export async function getAllPostsApi() {
    try {
        const { data } = await axios.get(baseURL + "posts",{
            headers: {
                token: localStorage.getItem("token"),
            }
        })
        return data 
    } catch (error){
        return error.response.data
    }
}

export async function getSinglePostApi(postId) {
    try {
        const { data } = await axios.get(baseURL + "posts/" + postId ,{
            headers: {
                token: localStorage.getItem("token"),
            }
        })
        return data 
    } catch (error){
        return error.response.data
    }
}
