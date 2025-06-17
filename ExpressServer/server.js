// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

// CORS 활성화
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ 이 주소만 허용
  })
);

// JSON 파싱 활성화
app.use(express.json());

// 메모리 기반 데이터
let users = [
  { id: 1, username: "alice", password: "1234", name: "Alice" },
  { id: 2, username: "bob", password: "5678", name: "Bob" },
];

// ✅ 로그인 API (Public)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const { password: _, ...safeUser } = user; // 비밀번호는 응답에서 제외
  res.json({ message: "Login successful", user: safeUser });
});

// ✅ 전체 사용자 조회 (Public)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// ✅ 특정 사용자 조회 (Public)
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// ✅ 사용자 추가 (Public)
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// ✅ 사용자 수정 (Public)
app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  user.name = req.body.name;
  res.json(user);
});

// ✅ 사용자 삭제 (Public)
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

// 서버 시작
app.listen(port, () => {
  console.log(`✅ Public API 서버 실행 중: http://localhost:${port}`);
});
