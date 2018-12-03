Feature: Login
  In order to use the app the user must be able to Login

  Scenario: Login Success
    Given the user has the correct credentials
    When the user enters username "test@drugdev.com"
    And the user enters password "supers3cret"
    And clicks Login
    Then the user is presented with a welcome message "Welcome Dr I Test"

 Scenario Outline: Login Incorrect credentials
   Given the user has the incorrect credentials
   When the user enters username : <email>
   And the user enters password : <password>
   And clicks Login
   Then the user is presented with a message : <message>

 Examples:
     | email               | password            |message |
     | test@drugdev.com    | supertest           |Credentials are incorrect |   
     | testing@drugdev.com | supers3cret         |Credentials are incorrect |   
     | testing@drugdev.com | supers3testing      |Credentials are incorrect |   
     | testing@drugdev.com |  ""                 |Credentials are incorrect |