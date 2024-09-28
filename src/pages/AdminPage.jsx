import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="grid">
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default AdminPage;
