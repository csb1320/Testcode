import { useAuthStore } from "../store/useAuthStore";
import Login from "../ui/Login";
import Dashboard from "../ui/Dashboard";

function App() {
  const { isAuthenticated, login } = useAuthStore();

  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Login onLogin={login} />
      )}
    </>
  );
}

export default App;