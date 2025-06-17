import { useAuthStore } from "../store/useAuthStore";

const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <h1>대시보드에 오신 것을 환영합니다!</h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Dashboard;