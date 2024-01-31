Feature: End to End Feature
    Scenario: Successful Login Scenario
        Given I am on the homepage
        When I login with the correct credentials
        Then I should be logged in successfully

    Scenario: Failed Login Scenario - Username
        Given I am on the homepage
        When I login with the wrong username
        Then I should see a failed username message

    Scenario: Failed Login Scenario - Password
        Given I am on the homepage
        When I login with the wrong password
        Then I should see a failed password message
