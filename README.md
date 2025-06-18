# 🧪 Testcode: Vite 기반 테스트 실전 예제

> **단위(Unit), 통합(Integration), E2E(End-to-End)** 테스트를 모두 담은 실전형 React 프로젝트입니다.  
> `pnpm`, `Vite`, `Vitest`, `React Testing Library`, `Cypress`, `Express`를 활용해 전체 테스트 흐름을 체험할 수 있습니다.

---

## 📁 프로젝트 구조

Testcode
|
├── ExpressServer
│ └── server.js
│
|
├── Frontend
│ ├── cypress (E2E)
│ │ └── e2e/app.cy.js
│ │
│ └── src/components
│ ├── Counter (예제 1)
│ └── Login (예제 2)
│ ├── pages
│ ├── store
│ └── tests
│ ├── App.test.tsx (통합)
│ ├── Login.test.tsx (단위)
│ ├── Dashboard.test.tsx (단위)
│ └── useAuth.test.tsx (단위)


---

## ⚙️ 기술 스택

| 구분            | 라이브러리                           |
|----------------|--------------------------------------|
| 번들러          | Vite                                 |
| 상태 관리       | Zustand                              |
| 단위/통합 테스트 | Vitest, Testing Library              |
| E2E 테스트      | Cypress                              |
| 백엔드 서버     | Express, CORS                        |
| 기타           | pnpm, TypeScript                     |

---

## 📦 설치 및 실행 방법

### 1️⃣ pnpm 설치

```
npm install -g pnpm
```


### 2️⃣ 프로젝트 클론
```
git clone https://github.com/csb1320/Testcode.git
```

🖥 Express API 서버 실행
```
cd Testcode/ExpressServer
pnpm install
pnpm start
```

서버는 http://localhost:4000 에서 실행됩니다.

### 💻 프론트엔드 실행
```
cd ../Frontend
pnpm install
pnpm dev
```

접속 주소: http://localhost:5173

### ✅ 테스트 실행
▶ 단위 + 통합 테스트 (Vitest)
```
pnpm test
```
▶ E2E 테스트 (Cypress)
```
pnpm cypress open
```

### 🧪 테스트 계층 설명
테스트 종류	설명	예시 파일
단위 테스트	개별 컴포넌트/함수의 최소 단위 테스트	Login.test.tsx, useAuth.test.tsx
통합 테스트	컴포넌트들이 조합되어 UI 흐름이 동작하는지 테스트	App.test.tsx
E2E 테스트	사용자가 실제로 입력하고 화면이 바뀌는 전체 흐름을 테스트	cypress/e2e/app.cy.js

### 👥 테스트 사용자 예시
이름	아이디	비밀번호
조성빈	조성빈	4242
정유열	정유열	3260
임두현	임두현	8088
김수민	김수민	9126

📸 스크린샷 (발표 자료용)
아래는 발표용 자료에서 보여줄 수 있는 시나리오입니다:

✅ 로그인 화면 → 대시보드 전환

✅ Zustand 상태 변경 확인

✅ 단위 테스트 통과

✅ 통합 테스트 통과

✅ E2E 테스트 통과
