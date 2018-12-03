function userName(email) {
    cy.get('input[name=email]').type(email);
}
function password(password) {
    cy.get('input[name=password]').type(password);
}
function clicksLogin() {
    cy.get('button').contains('Login').click();
}

export default { userName,password,clicksLogin }