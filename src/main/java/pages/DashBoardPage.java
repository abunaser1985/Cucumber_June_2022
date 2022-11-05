package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashBoardPage {
	
	WebDriver driver;
	
	public DashBoardPage(WebDriver driver) {
		    this.driver = driver;
	}





    @FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]") WebElement bankCash;
    @FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a") WebElement newAccount;
    
    
    public void insertbankCash() {
		bankCash.click();
	}
	
	public void insertnewAccount() {
		newAccount.click();
	}
}