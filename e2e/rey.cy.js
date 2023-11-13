describe('Open Membership', () => {
  it('Open Membership', () => {
    cy.visit('https://rey.id/id/');
    cy.contains('Lihat Membership').click();
    cy.contains('Buat Membership').click();
    cy.contains('Mulai Buat Membershipmu').click();
    cy.get(':nth-child(2) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('25');
    cy.contains('Tambah').click();
    cy.contains('Platinum').click();
    cy.contains('Lanjut');
    cy.get("button.rfi").click();
    })
})