import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="flex">
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default AdminPage;
