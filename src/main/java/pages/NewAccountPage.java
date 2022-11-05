package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends TestBase {
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver = driver;

	}
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement accountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement initialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement accountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement contactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement url;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement submitButton;
	
	
	
	public void insertaccountTitle(String AccountTitle) {
		accountTitle.sendKeys(AccountTitle + randomIntGenrator(9999));
	}

	public void insertdescription(String Description) {
		description.sendKeys(Description);
	}
	
	public void insertinitialBalance(String InitialBalance) {
		initialBalance.sendKeys(InitialBalance + randomIntGenrator(9999));
	}

	public void insertaccountNumber(String AccountNumber) {
		accountNumber.sendKeys(AccountNumber + randomIntGenrator(9999));
	}

	public void insertcontactPerson(String AP) {
		contactPerson.sendKeys(AP);
	}
	
	public void insertPhone(String phone) {
		Phone.sendKeys(phone + randomIntGenrator(9999));
	}

	public void insertinternetBankingURL( String URL) {
		url.sendKeys(URL);
	}
	public void submitButton() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		submitButton.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();

	}

		
	}
