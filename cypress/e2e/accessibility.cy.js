describe("Accessibility test", () => {
  beforeEach(() => {
    cy.visit("https://developer.chrome.com/docs/lighthouse/overview/");
    cy.injectAxe();
  });
  it("Should have no accessibility violations", () => {
    cy.checkA11y();
  });
  it("Only critical accessibility issues", () => {
    cy.checkA11y(null, { includedImpacts: ["serious"] });
  });
  it("ignore color contrast issues", () => {
    cy.checkA11y(null, { rules: { "color-contrast": { enabled: false } } });
  });
  it.only("dont fail tests", () => {
    cy.checkA11y(null, null, null, true);
  });
});
