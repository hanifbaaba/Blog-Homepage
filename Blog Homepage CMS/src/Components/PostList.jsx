import { useEffect, useState } from "react";
import PostCard from "./PostCard";
export default function PostList() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPost(data);
  }
  const posts = post.map((postItem) => (
    <PostCard key={postItem.id} title={postItem.title} body={postItem.body} />
  ));
  return (
    <div className="post-list">
      <p className="post-header"> Post List</p>
      <div className="posts"> {posts}</div>
    </div>
  );
}
