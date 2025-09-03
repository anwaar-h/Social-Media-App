import axios from "axios";
const baseURL = "https://linked-posts.routemisr.com/"

export async function addComment(commentContent, postId) {
    try{
        const {data} = await axios.post(baseURL + "comments" , {
            content: commentContent,
            post:postId
        },{
            headers:{
                token: localStorage.getItem("token")
            }
        }
    )
        return data 
    } catch (error){
        return error.response ? error.response.data.error : error.message ;
    }
}
