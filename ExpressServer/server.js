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
  { id: 1, username: "조성빈", password: "4242", name: "조성빈" },
  { id: 2, username: "정유열", password: "3260", name: "정유열" },
  { id: 3, username: "임두현", password: "8088", name: "임두현" },
  { id: 4, username: "김수민", password: "9126", name: "김수민" },
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

// ✅ 전체 사용자 조회
app.get("/api/users", (req, res) => {
  res.json(users);
});

// 서버 시작
app.listen(port, () => {
  console.log(`✅ API 서버 실행 중: http://localhost:${port}`);
});
