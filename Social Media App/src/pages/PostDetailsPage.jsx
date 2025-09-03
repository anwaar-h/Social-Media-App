import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import SkeletonCard from './Skeleton'
import { getSinglePostApi } from '../services/postsServices'

export default function PostDetailsPage() {
    const [post, setPost] = useState(null)
    const {id} = useParams()

    async function getSinglePost(){
        const response = await getSinglePostApi(id)
        console.log(response);
        if(response.message == "success"){
            setPost(response.post)
        }
    }
    useEffect(() => {
        getSinglePost()
    } , [])

    return (
    <div className='max-w-3xl mx-auto'>
        {post ? <Post post={post} /> : <SkeletonCard/> }
    </div>
    )
}
