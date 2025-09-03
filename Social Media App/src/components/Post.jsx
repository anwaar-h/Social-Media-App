import { Button, Input } from "@heroui/react";
import Comment from "./Comment";
import CardHeader from "./Post/CardHeader";
import PostActions from "./Post/PostActions";
import PostBody from "./Post/PostBody";
import PostFooter from "./Post/PostFooter";
import { useState } from "react";
import { addComment } from "../services/CommentsService";

export default function Post({ post, commentsLimit, callback}) {
    const [visibleComments, setVisibleComments] = useState(3)
    const [isLoading, setIsLoading] = useState(false)
    const [commentContent, setCommentContent] = useState("")
    const [isCommentSubmitting, setIsCommentSubmitting] = useState(false)

    function handleLoadMoreComments() {
        setIsLoading(true)
        setTimeout(() => {
            setVisibleComments(visibleComments + 2)
            setIsLoading(false)
        }, 200)
    }

    async function handleCommentSubmit(){
        const response = await addComment(commentContent, post.id)
        setIsCommentSubmitting(false)
        setCommentContent("") 
        callback()     
    }

    return (
        <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
            <div className="w-full h-16 items-center flex justify-between ">
                <CardHeader
                    avatar={post.user.photo}
                    header={post.user.name}
                    subHeader={post.createdAt}/>
                <svg
                    className="w-16"
                    xmlns="http://www.w3.org/2000/svg"
                    width={27}
                    height={27}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b0b0b0"
                    strokeWidth={2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={19} cy={12} r={1} />
                    <circle cx={5} cy={12} r={1} />
                </svg>
            </div>
            <PostBody caption={post.body} image={post.image} />
            <PostFooter numOfComments={post.comments.length} />
            <PostActions postId={post.id} />
            <div className="flex my-4" >
                <Input value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} variant="bordered" placeholder="Type Your Comment ..." endContent={ <Button isLoading={isCommentSubmitting} onPress={handleCommentSubmit}>Comment</Button> } />
            </div>
            {post.comments.slice(0, commentsLimit ?? visibleComments).map((comment) => <Comment key={comment.id} comment={comment} />)}
            {post.comments.length > visibleComments && !commentsLimit && <Button onPress={handleLoadMoreComments} isLoading={isLoading}  className="mx-auto block" variant="faded">Load More Comments</Button>}
        </div>
    );
}
