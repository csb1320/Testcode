describe('E2E 테스트 - Counter 동작 검증', () => {
  it('카운터가 증가한다', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Count: 0');
    cy.contains('Increment').click();
    cy.contains('Count: 1');
  });
});