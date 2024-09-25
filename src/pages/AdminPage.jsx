import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="flex items-baseline mx-16">
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default AdminPage;
