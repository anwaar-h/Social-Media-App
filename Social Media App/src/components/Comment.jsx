import CardHeader from "./Post/CardHeader"
 
export default function Comment({comment}) {
    return (
    <div className="border-divider">
        <CardHeader avatar={comment.commentCreator.photo} header={comment.commentCreator.name} subHeader={comment.createdAt} />
        <p className='ps-12 pt-2'>{comment.content}</p>
    </div>
    )
}  
