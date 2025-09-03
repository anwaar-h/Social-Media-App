import { useContext, useState } from 'react'
import { getAllPostsApi } from '../services/postsServices'
import { useEffect } from 'react';
import { authContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addToast } from '@heroui/toast';
import SkeletonCard from './Skeleton';
import Post from '../components/Post';

export default function FeedPage() {
    const [posts, setPosts] = useState([])
    const { setIsLoggedIn } = useContext(authContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    async function getPosts() {
        const data = await getAllPostsApi();
        setIsLoading(false)
        if (data.message == 'success'){
            setPosts(data.posts);
            console.log(data.posts);
            
        } else{
            localStorage.removeItem("token")
            setIsLoggedIn(false)
            addToast({
            title: data.error,
            description: "Invalid Token, Try To Login Again",
            timeout: 2000
            });
            navigate("/login")
        }
        
    }
    
    useEffect(() => {
        getPosts()
    }, [])

    return (
    <div className='grid gap-3 max-w-xl mx-auto'>
    { 
    isLoading ? <SkeletonCard/> :
    posts.map((post)=> <Post key={post.id} callback={getPosts} post={post} commentsLimit={1} />) 
   } 
    
   </div>
)
}
