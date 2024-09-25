import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

function DashboardPage() {
  return (
    <div className="flex items-baseline mx-16">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
