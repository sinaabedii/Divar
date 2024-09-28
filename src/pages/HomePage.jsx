import { useQuery } from "@tanstack/react-query";
import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";
import { getCategory } from "../services/admin";

function HomePage() {
  // It is done for loading the main page and sidebar
  const { data: AllPosts, isLoading: postsLoading } = useQuery(
    ["get-all-post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <>
      {postsLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div className=" xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl ">
          <Sidebar categories={categories} />
          <Main AllPosts={AllPosts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
