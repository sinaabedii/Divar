import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function DashboardPage() {
  return (
    <div className="flex">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
