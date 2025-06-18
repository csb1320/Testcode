const loginAndLogout = (username, password) => {
  cy.wait(500);
  cy.get("input[placeholder='Username']").type(username);
  cy.get("input[placeholder='Password']").type(password);
  cy.get("button").contains("로그인").click();
  cy.contains(`${username}님! 대시보드에 오신 것을 환영합니다!`).should(
    "be.visible"
  );
  cy.wait(500);
  cy.contains("로그아웃").click();
  cy.contains("Login").should("be.visible");
};

describe("App 통합 흐름 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("초기에는 로그인 화면이 보여야 한다", () => {
    cy.contains("Login").should("be.visible");
    cy.get("input[placeholder='Username']").should("exist");
    cy.get("input[placeholder='Password']").should("exist");
  });

  it("조성빈 로그인 시나리오", () => {
    loginAndLogout("조성빈", "4242");
  });

  it("정유열 로그인 시나리오", () => {
    loginAndLogout("정유열", "3260");
  });

  it("임두현 로그인 시나리오", () => {
    loginAndLogout("임두현", "8088");
  });

  it("김수민 로그인 시나리오", () => {
    loginAndLogout("김수민", "9126");
  });
});
