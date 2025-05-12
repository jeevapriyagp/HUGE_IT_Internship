import './PostItem.css'

function PostItem({ post }) 
{
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem

