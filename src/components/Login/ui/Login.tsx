type Props = {
  onLogin: () => void;
};

const Login = ({ onLogin }: Props) => (
  <div>
    <h1>로그인이 필요합니다</h1>
    <button onClick={onLogin}>로그인</button>
  </div>
);

export default Login;