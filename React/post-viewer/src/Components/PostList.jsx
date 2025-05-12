import PostItem from './PostItem'

function PostList({ posts }) 
{
  return (
    <div>
      {posts.length === 0 ? ( <p>Loading posts...</p> ) 
      : ( posts.map((post) => <PostItem key={post.id} post={post} />) )
      }
    </div>
  )
}

export default PostList
