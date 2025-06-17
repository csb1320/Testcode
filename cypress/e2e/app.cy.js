describe("App 통합 흐름 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("초기에는 로그인 문구가 보여야 한다", () => {
    cy.contains("로그인이 필요합니다").should("be.visible");
    cy.contains("대시보드에 오신 것을 환영합니다").should("not.exist");
  });

  it("로그아웃 버튼 클릭 시 로그인 문구가 다시 보여야 한다", () => {
    cy.wait(500);

    // 로그인 먼저 수행
    cy.get("button").contains("로그인").click();
    cy.wait(500);

    cy.contains("로그아웃").click();

    cy.contains("로그인이 필요합니다").should("be.visible");
    cy.contains("대시보드에 오신 것을 환영합니다").should("not.exist");
  });
});
