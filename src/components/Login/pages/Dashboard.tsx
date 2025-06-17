import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    fetch("http://localhost:4000/api/users");
  }, []);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          {user.name}님! 대시보드에 오신 것을 환영합니다!
        </div>
        <button className={styles.button} onClick={logout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
