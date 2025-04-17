import PostCard from "./Components/PostCard";
import Postlist from "./Components/PostList";

export default function App() {
  return (
    <div>
      <header className="header">Blog HomePage</header>
      <Postlist />
      <PostCard />
    </div>
  );
}
