import loginSteps from './loginSteps' ;
import selectors from '../config/selectors'
import textConstants from '../config/constants'


given(/^the user has the correct credentials$/, () => {
 cy.visit('/');
 cy.get("h1").should('contain',textConstants.welcome);
 cy.get(selectors.loginForm).children('h1').should('contain',textConstants.login);
 cy.get(selectors.email).should('contain',textConstants.email);
 cy.get(selectors.password).should('contain',textConstants.password); 
});

when(/^the user enters username "(.*?)"$/ , (email) => {
  loginSteps.userName(email);
});

then(/^the user enters password "(.*?)"$/, (password) => {
  loginSteps.password(password);
});

then(/^clicks Login$/, () => {
  loginSteps.clicksLogin();
});

then(/^the user is presented with a welcome message "(.*?)"$/, (message) => {
  cy.get('article').should('contain', message)
});

given(/^the user has the incorrect credentials$/, function () { 
 cy.visit('/');
 cy.get("h1").should('contain',textConstants.welcome);
});

when(/^the user enters username : (.*?)$/, function (email) {
  loginSteps.userName(email);
});
when(/^the user enters password : (.*?)$/, function (password) {
  loginSteps.password(password);
});
then(/^clicks Login$/, () => {
  loginSteps.clicksLogin();
});

 then(/^the user is presented with a message : (.*?)$/, (message) => {
  cy.contains(message).should('be.visible');
});