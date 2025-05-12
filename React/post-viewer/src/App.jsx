import { useEffect, useState } from 'react'
import PostList from './Components/PostList'
import './App.css'

function App() 
{
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=thepracticaldev')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) // Limit to 5 posts
      .catch((error) => console.error('Error fetching posts:', error))
  }, [])

  return (
    <div className="app-container">
      <h1 className="app-title">Posts</h1>
      <PostList posts={posts} />
    </div>
  )
}

export default App
