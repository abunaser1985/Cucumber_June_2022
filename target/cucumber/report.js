$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"\u003cAccount Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"\u003cDescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"\u003cInitial Balance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"\u003cAccount Number\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"\u003cContact Person\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"\u003cInternet Banking URL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Account Title",
        "Description",
        "Initial Balance",
        "Account Number",
        "Contact Person",
        "Phone",
        "Internet Banking URL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Saving",
        "This is created by Abu Naser",
        "1100",
        "657",
        "Abu Naser",
        "8881456",
        "https://www.wellsfargo.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking",
        "This is created by Abu Naser",
        "2400",
        "985",
        "Abu Naser",
        "8881456",
        "https://www.BOFA.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4257368476,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"Saving\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"This is created by Abu Naser\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"1100\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"657\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"Abu Naser\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"8881456\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"https://www.wellsfargo.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_techfios_loginpage()"
});
formatter.result({
  "duration": 1569299716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 270339707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 93860097,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1063982864,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 15234763,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 80394134,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 829461338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving",
      "offset": 47
    }
  ],
  "location": "LoginStepDefination.user_enters_Account_Title_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 135280183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is created by Abu Naser",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_accounts_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 187938672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1100",
      "offset": 39
    }
  ],
  "location": "LoginStepDefination.user_enters_account_inital_balance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 130149325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "657",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_account_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 151782499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abu Naser",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_person_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 193494572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8881456",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_phone_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 191925004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.wellsfargo.com/",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 180502501,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_submit()"
});
formatter.result({
  "duration": 5990934300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 9369313,
  "status": "passed"
});
formatter.after({
  "duration": 3377564025,
  "status": "passed"
});
formatter.before({
  "duration": 2406359136,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bank and cash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Account Title in accounts page as \"Checking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accounts description as \"This is created by Abu Naser\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters account inital balance as \"2400\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters account number as \"985\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contact person as \"Abu Naser\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone number as \"8881456\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Internet Banking URL as \"https://www.BOFA.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_techfios_loginpage()"
});
formatter.result({
  "duration": 1280305177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 221435554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "duration": 84377633,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 798001095,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 8947232,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 488358951,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 502729698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 47
    }
  ],
  "location": "LoginStepDefination.user_enters_Account_Title_in_accounts_page_as(String)"
});
formatter.result({
  "duration": 122402374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is created by Abu Naser",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_accounts_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 292209107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2400",
      "offset": 39
    }
  ],
  "location": "LoginStepDefination.user_enters_account_inital_balance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 144880898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "985",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_account_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 139480560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abu Naser",
      "offset": 31
    }
  ],
  "location": "LoginStepDefination.user_enters_contact_person_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 209566172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8881456",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.user_enters_phone_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 174863085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.BOFA.com/",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 189545295,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_submit()"
});
formatter.result({
  "duration": 5725218679,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 7417097,
  "status": "passed"
});
formatter.after({
  "duration": 3270708440,
  "status": "passed"
});
});