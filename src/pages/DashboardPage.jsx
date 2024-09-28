import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function DashboardPage() {
  return (
    <div className="grid">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
