import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function DashboardPage() {
  return (
    <div className="flex flex-row">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
