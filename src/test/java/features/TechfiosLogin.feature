@Scenario1
Feature: Techfios bank and cash New Account Functionality 

Scenario Outline: User should be able to login with valid credentials and open a new account	
	Given User is on the techfios login page 
	When User enters username as "<username>" 
	When User enters password as "<password>"
	And User clicks on signin Button
	Then User should land on Dashboard page 
	And User clicks on bank and cash
	And User clicks on New Account
	And User enters Account Title in accounts page as "<Account Title>" 
	And User enters accounts description as "<Description>" in accounts page 
	And User enters account inital balance as "<Initial Balance>" in accounts page 
	And User enters account number as "<Account Number>" in accounts page 
	And User enters contact person as "<Contact Person>" in accounts page 
	And User enters phone number as "<Phone>" in accounts page 
	And User enters Internet Banking URL as "<Internet Banking URL>" in accounts page 
  And User clicks on submit
	Then User should be able to validate account created successfully
	
Examples:
|username         |password|Account Title |Description									|Initial Balance|Account Number	|Contact Person	|Phone		|Internet Banking URL				|
|demo@techfios.com|abc123  |Saving				|This is created by Abu Naser |1100						|657						|Abu Naser			|8881456	|https://www.wellsfargo.com/|
|demo@techfios.com|abc123  |Checking			|This is created by Abu Naser |2400						|985						|Abu Naser			|8881456	|https://www.BOFA.com/			|

	
	
	