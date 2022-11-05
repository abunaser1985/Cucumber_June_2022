package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import junit.framework.Assert;
import pages.DashBoardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {
     
	 LoginPage loginpage;
	 DashBoardPage dashboardpage;
	 NewAccountPage newaccountpage;
	 
	 @Before
		public void setUp() {
			initDriver();
			loginpage = PageFactory.initElements(driver, LoginPage.class);
			dashboardpage = PageFactory.initElements(driver, DashBoardPage.class);
			newaccountpage = PageFactory.initElements(driver, NewAccountPage.class);
	 }
	 
	 @Given ("^User is on the techfios login page$")
	 public void user_is_on_techfios_loginpage() {
		 driver.get("https://techfios.com/billing/?ng=admin/");
	 }
	 
	 @When ("^User enters username as \"([^\"]*)\"$")
	 public void user_enter_username_as(String username) {
         loginpage.insertUserName(username);
	 }
	 
	 @When("^User enters password as \"([^\"]*)\"$")
	 public void user_enters_password_as(String password) {
		 loginpage.insertPassWord(password);
	 }

	 @When("^User clicks on signin Button$")
	 public void user_clicks_the_login_button()  {
		 loginpage.clickLogInButton();
	 }

	 @Then("^User should land on Dashboard page$")
	 public void user_should_land_on_Dashboard_page() {
		 String expectedTitle = "Dashboard- iBilling";
			String actualTitle = loginpage.getPageTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
	     
	 }
	  
	 @And ("^User clicks on bank and cash$")
	 public void user_clicks_on_bankCash() {
		 dashboardpage.insertbankCash();
	 }
	
	 @And ("^User clicks on New Account$")
	 public void user_clicks_on_newAccount() {
		 dashboardpage.insertnewAccount();
	 }
	 
	 @And("^User enters Account Title in accounts page as \"([^\"]*)\"$")
		public void user_enters_Account_Title_in_accounts_page_as(String AccountTitle)  {
			newaccountpage.insertaccountTitle(AccountTitle);
		}
		
		@And("^User enters accounts description as \"([^\"]*)\" in accounts page$")
		public void user_enters_accounts_description_as_in_accounts_page(String description)  {
			newaccountpage.insertdescription(description);
		}

		@And("^User enters account inital balance as \"([^\"]*)\" in accounts page$")
		public void user_enters_account_inital_balance_as_in_accounts_page(String initalBalance) {
			newaccountpage.insertinitialBalance(initalBalance);
		}

		@And("^User enters account number as \"([^\"]*)\" in accounts page$")
		public void user_enters_account_number_as_in_accounts_page(String accountNumber) {
			newaccountpage.insertaccountNumber(accountNumber);
		}

		@And("^User enters contact person as \"([^\"]*)\" in accounts page$")
		public void user_enters_contact_person_as_in_accounts_page(String contactPerson) {
			newaccountpage.insertcontactPerson(contactPerson);
		}

		@And("^User enters phone number as \"([^\"]*)\" in accounts page$")
		public void user_enters_phone_number_as_in_accounts_page(String phoneNumber)  {
			newaccountpage.insertPhone(phoneNumber);
		}

		@And("^User enters Internet Banking URL as \"([^\"]*)\" in accounts page$")
		public void user_enters_Internet_Banking_URL_as_in_accounts_page(String url){
			newaccountpage.insertinternetBankingURL(url);
		}

		@And("^User clicks on submit$")
		public void user_clicks_on_submit() {
			newaccountpage.submitButton();
		}

		@Then("^User should be able to validate account created successfully$")
		public void user_should_be_able_to_validate_account_created_successfully()  {
			String actualAccountPageTitle = newaccountpage.getPageTitle();
			String expectedAccountPageTitle = "Accounts- iBilling";
			Assert.assertEquals(expectedAccountPageTitle, actualAccountPageTitle);
			
		}
		
		@After
		public void tearDown() {
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			driver.close();
			driver.quit();
		}
	
}