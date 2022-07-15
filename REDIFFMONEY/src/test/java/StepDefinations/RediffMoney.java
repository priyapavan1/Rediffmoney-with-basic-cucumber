package StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RediffMoney 
{

	 WebDriver driver;
	
	@Given("^i open the browser with url \"([^\"]*)\"$")
	public void i_open_the_browser_with_url(String url) 
		{
		   
			System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.get(url);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	
		}

	@When("^i click on my portfolio icon$")
	public void i_click_on_my_portfolio_icon() throws Throwable
		{
			
			driver.findElement(By.linkText("My Portfolio")).click(); 
			
		}

	@Then("^i should see login page$")
	public void i_should_see_login_page() throws Throwable 
		{
		  if(driver.findElement(By.id("loginsubmit")).isDisplayed())
		  {
			 System.out.println("login inputs");
		  }
			
		}

	@When("^i enter valid email id as \"([^\"]*)\"$")
	public void i_enter_valid_email_id_as(String mail)
		{
			driver.findElement(By.id("useremail")).sendKeys(mail); 
		}

	@When("^i enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String pass) throws InterruptedException 
		{
			driver.findElement(By.id("userpass")).sendKeys(pass); 
			Thread.sleep(2000);
		}

	@When("^i click submit$")
	public void i_click_submit() throws Throwable 
		{
		 
			WebElement Submit = driver.findElement(By.id("loginsubmit"));
			Submit.click();
		    Thread.sleep(2000);
		}

	@Then("^i should see the home page$")
	public void i_should_see_the_home_page()
		{
			 

		    WebElement radio = driver.findElement(By.id("addmf"));
			Actions actions = new Actions(driver);
			actions.moveToElement(radio);
			actions.perform();
		}

	@When("^i click on addstock button$")
	public void i_click_on_addstock_button()
		{
		    
			driver.findElement(By.xpath("//input[@id='addStock']")).click(); 
		}

	@When("^i add stock name as \"([^\"]*)\"$")
	public void i_add_stock_name_as(String stoc)throws Throwable
		{
		    
			driver.findElement(By.xpath("//input[@id='addstockname']")).sendKeys(stoc);
			driver.findElement(By.xpath( "//div[@id='14080119']")).click();
		}

	@When("^i add date of purchase as\"([^\"]*)\"$")
	public void i_add_date_of_purchase_as(String date)  
		{
			driver.findElement(By.id("stockAddDate")).sendKeys(date);  
		}

	@When("^i add quantity as \"([^\"]*)\"$")
	public void i_add_quantity_as(String quantity)
		{
			driver.findElement(By.id("addstockqty")).sendKeys(quantity);
		}

	@When("^i add purchase price as \"([^\"]*)\"$")
	public void i_add_purchase_price_as(String price) throws Throwable
		{
		    
			driver.findElement(By.id("addstockprice")).sendKeys(price);
		}

	@When("^i click on add_stock button$")
	public void i_click_on_add_stock_button() throws Throwable 
		{
		    
			WebElement Submit1 = driver.findElement(By.id("addStockButton"));
			Submit1.click();
		    Thread.sleep(2000);
		}
		
		
	@When("^i click on  mywatchlist button$")
	public void i_click_on_mywatchlist_button() throws Throwable
		{
		    
			WebElement radio1 = driver.findElement(By.id("createPortfolio"));
			Actions actions2 = new Actions(driver);
			actions2.moveToElement(radio1);
			actions2.perform();
		    
		    driver.findElement(By.linkText("My Watchlist")).click();
		       
		}
	@When("^i click on adddstocks$")
	public void i_click_on_addd_stocks()  
	{
		driver.findElement(By.xpath("//input[@id='add-stock-button']")).click(); 
	}
	
	@When("^i add stockname as \"([^\"]*)\"$")
	public void i_add_stockname_as(String name)  
		{
			driver.findElement(By.xpath("//input[@id='stocksearch']")).sendKeys(name);
			driver.findElement(By.xpath("//div[@id='16030094']")).click();
		}
		
	@When("^i add a max price as \"([^\"]*)\"$")
	public void i_add_a_max_price_as(String price) 
		{
		  
			driver.findElement(By.id("maxprice")).sendKeys(price);
		}

	@When("^i add a min price as \"([^\"]*)\"$")
	public void i_add_a_min_price_as(String min)   
		{
			driver.findElement(By.id("minprice")).sendKeys(min);  
		}

		@When("^i click on add button$")
		public void i_click_on_add_button() throws Throwable
		{
		    
			WebElement Add = driver.findElement(By.id("add-stock-submit"));
			Add.click();
		    Thread.sleep(2000);  
		}

		@When("^i click on signout button$")
		public void i_click_on_signout_button() throws Throwable
		{
		    
			Thread.sleep(1000);
		    driver.findElement(By.linkText("Sign Out")).click();  
	}
	
	
	
	
}
	

