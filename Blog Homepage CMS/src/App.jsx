import FilterTags from "./Components/FilterTags";
import Postlist from "./Components/PostList";

export default function App() {
  return (
    <div>
      <header>Blog HomePage</header>
      <FilterTags />
      <Postlist />
    </div>
  );
}
